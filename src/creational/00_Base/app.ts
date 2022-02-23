/**
 * * This example is making a Maze Map.
 */

import { Direction, Door, Maze, Room, Wall } from './maze';

class App {
  createMaze(): Maze {
    const aMaze = new Maze();
    const r1 = new Room(1);
    const r2 = new Room(2);
    const theDoor = new Door(r1, r2);

    aMaze.addRoom(r1);
    aMaze.addRoom(r2);

    r1.setSide(Direction.North, new Wall());
    r1.setSide(Direction.East, theDoor);
    r1.setSide(Direction.South, new Wall());
    r1.setSide(Direction.West, new Wall());

    r2.setSide(Direction.North, new Wall());
    r2.setSide(Direction.East, new Wall());
    r2.setSide(Direction.South, new Wall());
    r2.setSide(Direction.West, theDoor);

    return aMaze;
  }

  main() {
    const _maze = this.createMaze();
  }
}

// * Run
const app = new App();
app.main();
