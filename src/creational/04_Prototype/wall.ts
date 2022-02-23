import { MapSite } from './mapSite';

export class Wall implements MapSite {
  enter() {
    return false;
  }
  clone() {
    const clone = new Wall();
    return clone;
  }
}
