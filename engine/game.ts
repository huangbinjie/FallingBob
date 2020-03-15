import { Updater, Task } from "./updater";
import { StageManager } from "./manager/stage";
import { MovementManager } from "./manager/movement";

export type GameOptions = {
  updater?: Updater
}

export class Game {
  private updater = new Updater()

  constructor(options: GameOptions) {
    if (options.updater) {
      this.updater = options.updater
    }
  }

  public run() {
    // management
    MovementManager.listen()

    this.updater.addTask(() => {
      StageManager.current?.update()
    })

    this.updater.addTask(() => {
      if (StageManager.current) {
        for (const system of StageManager.current.getSystems()) {
          system.update()
        }
      }
    })

    this.updater.run()
  }

  public stop() {
    this.updater.stop()
  }

  public addTask(task: Task) {
    this.updater.addTask(task)
  }

}
