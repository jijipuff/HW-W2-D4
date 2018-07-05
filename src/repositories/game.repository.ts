import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { User, Game } from '../models';
import { inject } from '@loopback/core';

export class GameRepository extends DefaultCrudRepository<
  Game,
  typeof User.prototype.id
  > {
  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
  ) {
    super(Game, datasource);
  }
}
