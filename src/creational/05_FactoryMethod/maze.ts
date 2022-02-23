import { BaseRoom, EnchantedRoom, Room } from './room';

export interface Maze {
  addRoom(room: Room): void;
  getRoom(roomNo: number): Room;
}

export class BaseMaze implements Maze {
  private rooms: BaseRoom[];

  addRoom(room: BaseRoom) {
    this.rooms.push(room);
  }

  getRoom(roomNo: number) {
    return this.rooms[roomNo];
  }
}

export class EnchantedMaze implements Maze {
  private rooms: EnchantedRoom[];

  addRoom(room: EnchantedRoom) {
    this.rooms.push(room);
  }

  getRoom(roomNo: number) {
    return this.rooms[roomNo];
  }
}
