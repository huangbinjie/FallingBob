import { AbstractActor } from "js-actor"
import { Update } from "../../renderer/Update";
import { World } from "../../renderer/world";
import { createObstacle } from "../entities/createObstacle";

export class ObstacleSystem extends AbstractActor {
  constructor(private world: World) { super() }
  createReceive() {
    return this.receiveBuilder()
      .match(Update, () => {
        const obstacle = createObstacle(this.world.worldWidth, this.world.worldHeight)
        this.world.obstacleGroup.addEntity(obstacle)
        // 判断是否需要生成新障碍，添加删除 Obstacle 实体
        // 判断是否碰撞

      })
      .build()
  }
}