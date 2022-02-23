import { MapSite } from './mapSite';

export type Wall = MapSite;

export class BaseWall implements Wall {
  enter() {
    return false;
  }
}
