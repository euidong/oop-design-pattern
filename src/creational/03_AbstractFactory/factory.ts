import { Door, DoorNeedingSpell } from './door';
import { Maze } from './maze';
import { EnchantedRoom, Room } from './room';
import { Wall } from './wall';
import { Spell } from './spell';

export class MazeFactory {
  makeMaze(): Maze {
    return new Maze();
  }

  makeWall(): Wall {
    return new Wall();
  }

  makeDoor(r1: Room, r2: Room): Door {
    return new Door(r1, r2);
  }

  makeRoom(n: number): Room {
    return new Room(n);
  }
}

export class EnchantedMazeFactory extends MazeFactory {
  protected castSpell(): Spell {
    return new Spell();
  }

  constructor() {
    super();
  }

  makeRoom(n: number) {
    return new EnchantedRoom(n, this.castSpell());
  }

  makeDoor(r1: Room, r2: Room) {
    return new DoorNeedingSpell(r1, r2);
  }
}
