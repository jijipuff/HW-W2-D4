import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { User, GameUserMap } from '../models';
import { inject } from '@loopback/core';

export class GameUserRepository extends DefaultCrudRepository<
  GameUserMap,
  typeof User.prototype.id
  > {
  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
  ) {
    super(GameUserMap, datasource);
  }
}
