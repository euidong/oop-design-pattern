import { Room, Direction, BaseRoom } from './room';
import { BaseDoor, Door } from './door';
import { BaseWall } from './wall';
import { Maze } from './maze';

export interface MazeBuilder {
  buildMaze(): void;
  buildRoom(roomNo: number): void;
  buildDoor(r1: Room, r2: Room): void;

  getMaze(): Maze;
}

export class BaseMazeBuilder implements MazeBuilder {
  private maze: Maze;
  private rooms: Room[];
  private doors: Door[];

  constructor() {
    this.rooms = [];
    this.doors = [];
  }

  buildMaze() {
    this.maze = new Maze();
  }

  buildRoom(roomNo: number) {
    const room = new BaseRoom(roomNo);
    room.setSide(Direction.East, new BaseWall());
    room.setSide(Direction.North, new BaseWall());
    room.setSide(Direction.South, new BaseWall());
    room.setSide(Direction.West, new BaseWall());

    this.rooms.push(room);
  }

  buildDoor(r1: Room, r2: Room) {
    const door = new BaseDoor(r1, r2);
    r1.setSide(Direction.East, door);
    r2.setSide(Direction.West, door);

    this.doors.push(door);
  }

  getMaze() {
    return this.maze;
  }
}

export class MasicalMazeBuilder implements MazeBuilder {
  private maze: Maze;
  private rooms: Room[];
  private doors: Door[];

  constructor() {
    this.rooms = [];
    this.doors = [];
  }

  buildMaze() {
    this.maze = new Maze();
  }

  buildRoom(roomNo: number) {
    const room = new BaseRoom(roomNo);
    room.setSide(Direction.East, new BaseWall());
    room.setSide(Direction.North, new BaseWall());
    room.setSide(Direction.South, new BaseWall());
    room.setSide(Direction.West, new BaseWall());

    this.rooms.push(room);
  }

  buildDoor(r1: Room, r2: Room) {
    const door = new BaseDoor(r1, r2);
    r1.setSide(Direction.East, door);
    r2.setSide(Direction.West, door);

    this.doors.push(door);
  }

  getMaze() {
    return this.maze;
  }
}
