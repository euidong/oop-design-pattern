import { BaseMazeBuilder, MazeBuilder } from './builder';
import { Maze } from './maze';

class App {
  createMaze(builder: MazeBuilder): Maze {
    builder.buildMaze();

    builder.buildRoom(1);
    builder.buildRoom(2);

    builder.buildDoor(1, 2);

    return builder.getMaze();
  }

  main() {
    const builder: MazeBuilder = new BaseMazeBuilder();
    // const builder: MazeBuilder = new MasicalMazeBuilder();
    const _maze: Maze = this.createMaze(builder);
  }
}

const app = new App();
app.main();
