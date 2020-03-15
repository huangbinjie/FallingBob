import { AbstractStage } from "../stage";
import { AbstractWorld } from "../world";

export class StageManager {
  private static resolver?: () => void
  private static previous?: AbstractStage
  static current?: AbstractStage

  static of(world: AbstractWorld) {
    return new StageManager(world)
  }

  constructor(private world: AbstractWorld) { }

  // 切换到下一个场景，当前场景在切换到下下个场景时销毁
  to(stage: AbstractStage) {
    stage.world = this.world
    stage.preStart()
    return new Promise((resolve, reject) => {
      StageManager.resolver = resolve
      StageManager.previous?.postStop()
      StageManager.previous = StageManager.current
      StageManager.current = stage
    })
  }

  static back() {
    if (!StageManager.resolver) {
      throw Error('请确认有运行中的 stage.')
    }
    StageManager.current?.postStop()
    StageManager.current = StageManager.previous
    StageManager.current?.preStart()
    delete StageManager.previous
    StageManager.resolver()
  }

  // 切换到下一个场景，当前场景立即销毁
  replace(stage: AbstractStage) {
    delete StageManager.previous
    stage.world = this.world
    StageManager.current = stage
    StageManager.current.preStart()
  }
}