import { AbstractActor } from "js-actor"
import { Update } from "../../renderer/Update";
import { World } from "../../renderer/world";
import { createObstacle } from "../entities/createObstacle";

/**
 * 障碍物系统
 * 判断是否有必要生成障碍。
 * 如果上一次生成间隔大于40帧，则重新生成。
 * 关键字：40个，生成
 */
export class ObstacleSystem extends AbstractActor {
  constructor(private world: World) { super() }
  createReceive() {
    return this.receiveBuilder()
      .match(Update, () => {
        if (this.world.tickTime > 40) {
          const obstacle = createObstacle(this.world.worldWidth, this.world.worldHeight)
          this.world.obstacleGroup.addEntity(obstacle)
          this.world.tickTime = 0
        }
      })
      .build()
  }
}