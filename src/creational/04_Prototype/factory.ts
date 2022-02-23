import { Door, DoorNeedingSpell } from './door';
import { Maze } from './maze';
import { EnchantedRoom, Room } from './room';
import { Wall } from './wall';
import { Spell } from './spell';

export interface MazeFactory {
  makeMaze(): Maze;
  makeWall(): Wall;
  makeDoor(): Door;
  makeRoom(): Room;
}

export class BaseMazeFactory implements MazeFactory {
  private prototypeOfWall: Wall;
  private prototypeOfDoor: Door;
  private prototypeOfRoom: Room;
  private prototypeOfMaze: Maze;

  constructor() {
    this.prototypeOfWall = new Wall();
    this.prototypeOfRoom = new Room(0);
    this.prototypeOfDoor = new Door(this.prototypeOfRoom, new Room(1));
    this.prototypeOfMaze = new Maze();
  }

  makeMaze(): Maze {
    return this.prototypeOfMaze.clone();
  }

  makeWall(): Wall {
    return this.prototypeOfWall.clone();
  }

  makeDoor(): Door {
    return this.prototypeOfDoor.clone();
  }

  makeRoom(): Room {
    const clone = this.prototypeOfRoom.clone();
    return clone;
  }
}

export class EnchantedMazeFactory implements MazeFactory {
  protected castSpell(): Spell {
    return new Spell();
  }

  private prototypeOfWall: Wall;
  private prototypeOfDoor: DoorNeedingSpell;
  private prototypeOfRoom: EnchantedRoom;
  private prototypeOfMaze: Maze;

  constructor() {
    this.prototypeOfWall = new Wall();
    this.prototypeOfRoom = new EnchantedRoom(0, this.castSpell());
    this.prototypeOfDoor = new DoorNeedingSpell(
      this.prototypeOfRoom,
      new Room(1)
    );
    this.prototypeOfMaze = new Maze();
  }

  makeMaze(): Maze {
    return this.prototypeOfMaze.clone();
  }

  makeWall(): Wall {
    return this.prototypeOfWall.clone();
  }

  makeDoor(): Door {
    return this.prototypeOfDoor.clone();
  }

  makeRoom(): Room {
    const clone = this.prototypeOfRoom.clone();
    return clone;
  }
}
