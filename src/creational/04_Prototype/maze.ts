import { Prototype } from './prototype';
import { Room } from './room';

export class Maze implements Prototype {
  private rooms: Room[];

  constructor() {
    this.rooms = [];
  }

  addRoom(room: Room): void {
    this.rooms.push(room);
  }

  getRoom(roomNo: number): Room {
    return this.rooms[roomNo];
  }

  clone() {
    const clone = new Maze();
    clone.rooms = [...this.rooms];
    return clone;
  }
}
