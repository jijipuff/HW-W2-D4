import { Entity, property, model } from '@loopback/repository';

@model()
export class Game extends Entity {

  @property({
    type: 'number',
    id: true,
  })
  uid?: number;

  @property({
    type: 'number',
  })
  radius: number;

  @property({
    type: 'number',
  })
  lng: number;

  @property({
    type: 'number',

  })
  lat: number;


  getId() {
    return this.id;
  }
}
