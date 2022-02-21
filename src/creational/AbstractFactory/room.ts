import { MapSite } from './mapSite';
import { Spell } from './spell';

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

export class EnchantedRoom extends Room {
  private spell: Spell;

  constructor(roomNo: number, spell: Spell) {
    super(roomNo);
    this.spell = spell;
  }

  enter(direction: Direction) {
    if (this.spell) {
      return super.enter(direction);
    }
    return false;
  }

  setSide(direction: Direction, site: MapSite) {
    super.setSide(direction, site);
  }

  getSide(direction: Direction): MapSite {
    return super.getSide(direction);
  }
}
