import { MapSite } from './mapSite';
import { Room } from './room';

export type Door = MapSite;

export class BaseDoor implements Door {
  private isOpen: boolean;
  private rooms: Room[];

  constructor(r1: Room, r2: Room) {
    this.isOpen = false;
    this.rooms = [r1, r2];
  }

  enter() {
    return this.isOpen;
  }
}

export class DoorNeedingSpell implements Door {
  private isOpen: boolean;
  private rooms: Room[];

  constructor(r1: Room, r2: Room) {
    this.isOpen = false;
    this.rooms = [r1, r2];
  }

  enter() {
    return this.isOpen;
  }
}
