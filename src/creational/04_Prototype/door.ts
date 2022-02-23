import { MapSite } from './mapSite';
import { Room } from './room';

export class Door implements MapSite {
  private isOpen: boolean;
  private rooms: Room[];

  constructor(room1: Room, room2: Room) {
    this.isOpen = false;
    this.rooms = [room1, room2];
  }

  enter() {
    return this.isOpen;
  }

  clone() {
    const clone = new Door(this.rooms[0], this.rooms[1]);
    return clone;
  }
}

export class DoorNeedingSpell extends Door {
  constructor(r1: Room, r2: Room) {
    super(r1, r2);
  }
}
