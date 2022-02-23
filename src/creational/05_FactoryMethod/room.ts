import { MapSite } from './mapSite';
import { Spell } from './spell';

export enum Direction {
  North,
  South,
  East,
  West
}

export interface Room {
  enter(direction: Direction): boolean;
  setSide(direction: Direction, site: MapSite): void;
  getSide(direction: Direction): MapSite;
}

export class BaseRoom implements Room {
  private roomNo: number;
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

  getSide(direction: Direction) {
    return this.sides[direction];
  }
}

export class EnchantedRoom implements Room {
  private spell: Spell;
  private roomNo: number;
  private sides: MapSite[];

  constructor(roomNo: number, spell: Spell) {
    this.roomNo = roomNo;
    this.sides = [null, null, null, null];
    this.spell = spell;
  }

  enter(direction: Direction) {
    if (this.spell) {
      return this.sides[direction].enter();
    }
    return false;
  }

  setSide(direction: Direction, site: MapSite) {
    this.sides[direction] = site;
  }

  getSide(direction: Direction) {
    return this.sides[direction];
  }
}
