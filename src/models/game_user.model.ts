import { Entity, property, model } from '@loopback/repository';

@model()
export class GameUserMap extends Entity {

  @property({
    type: 'number',
    id: true,
  })
  uid?: number;

  @property({
    type: 'number',
  })
  userId: number;

  @property({
    type: 'number',
  })
  gameId: number;

  @property({
    type: 'number',

  })
  userStatus: string;

  @property({
    type: 'number',

  })
  lng: number;

  @property({
    type: 'number',

  })
  lat: number;

  @property({
    type: 'number',

  })
  role: string;

  @property({
    type: 'number',

  })
  timer: number;






  getId() {
    return this.id;
  }
}
