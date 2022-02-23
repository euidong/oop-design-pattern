export interface MapSite {
  enter(): boolean;
}

export class Wall implements MapSite {
  enter() {
    return false;
  }
}

export class Door implements MapSite {
  private isOpen: boolean;
  private rooms: Room[];

  constructor(room1: Room, room2: Room) {
    this.rooms = [room1, room2];
  }

  enter() {
    return this.isOpen;
  }
}

export enum Direction {
  North,
  South,
  East,
  West
}

export class Room {
  private readonly roomNo: number;
  private sides: MapSite[];

  constructor(roomNo: number) {
    this.roomNo = roomNo;
    this.sides = [null, null, null, null];
  }

  enter(direction: Direction) {
    return this.sides[direction].enter();
  }

  setSide(direction: Direction, site: MapSite) {
    this.sides[direction] = site;
  }

  getSide(direction: Direction): MapSite {
    return this.sides[direction];
  }
}

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
