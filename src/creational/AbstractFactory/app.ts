/**
 * * This example is making a Maze Map.
 */

import { Maze } from './maze';
import { EnchantedMazeFactory, MazeFactory } from './factory';
import { Direction } from './room';

class App {
  createMaze(factory: MazeFactory): Maze {
    const aMaze = factory.makeMaze();
    const r1 = factory.makeRoom(1);
    const r2 = factory.makeRoom(2);
    const aDoor = factory.makeDoor(r1, r2);
    aMaze.addRoom(r1);
    aMaze.addRoom(r2);
    r1.setSide(Direction.North, factory.makeWall());
    r1.setSide(Direction.East, aDoor);
    r1.setSide(Direction.South, factory.makeWall());
    r1.setSide(Direction.West, factory.makeWall());
    r2.setSide(Direction.North, factory.makeWall());
    r2.setSide(Direction.East, factory.makeWall());
    r2.setSide(Direction.South, factory.makeWall());
    r2.setSide(Direction.West, aDoor);
    return aMaze;
  }

  main() {
    // * const factory = new MazeFactory();
    const factory = new EnchantedMazeFactory();
    const maze = this.createMaze(factory);
  }
}

// * Run
const app = new App();
app.main();
