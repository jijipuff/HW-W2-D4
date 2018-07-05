import { repository } from "@loopback/repository";
import { GameRepository } from "../repositories/game.repository";
import { post, requestBody } from "@loopback/rest";
import { Game } from "../models";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class GameController {
  constructor(@repository(GameRepository) protected gameRepo: GameRepository) { }

  @post('/game')
  async setupGame(@requestBody() game: Game) {

    return await this.gameRepo.create(game);
  }
}
