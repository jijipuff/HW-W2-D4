import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models';
import { HttpErrors, post, get, requestBody, param } from '@loopback/rest';
import { sign, verify } from 'jsonwebtoken';

export class LoginController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository) {

    sign({
      user: User
    }, 'shh', {
        issuer: 'auth.ix.co.za',
        audience: 'ix.co.za'
      });
  }

  @get("/verify")
  verifyToken(@param.query.string("jwt") jwt: string) {

    try {
      let payload = verify(jwt, "shh");
      return payload;
    } catch (err) {
      throw new HttpErrors.Unauthorized("Invalid Token");
    }
  }
  // The user is authenticated and we can process...

  @post('/login')
  async loginUser(@requestBody() user: User): Promise<{ token: string }> {
    // Check that email and password are both supplied
    if (!user.email || !user.password) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    // Check that email and password are valid
    let userExists: boolean = !!(await this.userRepo.count({
      and: [{ email: user.email }, { password: user.password }],
    }));

    if (!userExists) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    let foundUser = await this.userRepo.findOne({
      where: {
        and: [
          { email: user.email },
          { password: user.password }
        ],
      },
    }) as User;

    let jwt = sign({
      user: {
        id: foundUser.id,
        email: foundUser.email
      }
    },
      'shh',
      {
        issuer: 'auth.ix.co.za',
        audience: 'ix.co.za'
      });

    return {
      token: jwt
    };
  }
}
