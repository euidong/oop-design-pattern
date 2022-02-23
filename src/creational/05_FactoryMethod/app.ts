import { BaseWall } from './wall';
import { BaseDoor, DoorNeedingSpell } from './door';
import { BaseMaze, EnchantedMaze, Maze } from './maze';
import { BaseRoom, Direction, EnchantedRoom } from './room';
import { Spell } from './spell';

export interface App {
  makeMaze(): Maze;
  main(): void;
}

export class BaseApp implements App {
  makeMaze() {
    const maze = new BaseMaze();
    const r1 = new BaseRoom(1);
    const r2 = new BaseRoom(2);
    const door = new BaseDoor(r1, r2);

    r1.setSide(Direction.East, door);
    r1.setSide(Direction.North, new BaseWall());
    r1.setSide(Direction.South, new BaseWall());
    r1.setSide(Direction.West, new BaseWall());
    r2.setSide(Direction.East, new BaseWall());
    r2.setSide(Direction.North, new BaseWall());
    r2.setSide(Direction.South, new BaseWall());
    r2.setSide(Direction.West, door);

    maze.addRoom(r1);
    maze.addRoom(r2);

    return maze;
  }

  main() {
    const _maze = this.makeMaze();
  }
}

export class MasicApp implements App {
  makeMaze() {
    const maze = new EnchantedMaze();
    const spell = new Spell();
    const r1 = new EnchantedRoom(1, spell);
    const r2 = new EnchantedRoom(2, spell);
    const door = new DoorNeedingSpell(r1, r2);

    r1.setSide(Direction.East, door);
    r1.setSide(Direction.North, new BaseWall());
    r1.setSide(Direction.South, new BaseWall());
    r1.setSide(Direction.West, new BaseWall());
    r2.setSide(Direction.East, new BaseWall());
    r2.setSide(Direction.North, new BaseWall());
    r2.setSide(Direction.South, new BaseWall());
    r2.setSide(Direction.West, door);

    maze.addRoom(r1);
    maze.addRoom(r2);

    return maze;
  }

  main() {
    const _maze = this.makeMaze();
  }
}

const app: App = new BaseApp();
// * const app: App = new MasicApp();
app.main();
