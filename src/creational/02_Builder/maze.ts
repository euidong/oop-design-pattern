import { Room } from './room';

export class Maze {
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
}
