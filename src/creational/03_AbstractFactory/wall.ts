import { MapSite } from './mapSite';

export class Wall implements MapSite {
  enter() {
    return false;
  }
}
