import { MapSite } from './mapSite';
import { Room } from './room';

export type Door = MapSite;

export class BaseDoor implements Door {
  private isOpen: boolean;
  private rooms: Room[];

  constructor(r1: Room, r2: Room) {
    this.rooms = [r1, r2];
    this.isOpen = false;
  }

  enter() {
    return this.isOpen;
  }
}
