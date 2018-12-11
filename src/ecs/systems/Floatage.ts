import { AbstractActor } from "js-actor";
import { Update } from "../../renderer/Update";
import { World } from "../../renderer/world";
import { PositionComponent } from "../components/Position";

/**
 * 浮力系统。
 * 根据 floatage 数值大小改变障碍物的 y 坐标
 */
export class FloatageSystem extends AbstractActor {
  constructor(private world: World) { super() }
  createReceive() {
    return this.receiveBuilder()
      .match(Update, () => {
        const obstacles = this.world.obstacleGroup.getEntities()
        for (let obstacle of obstacles) {
          const position = obstacle.get(PositionComponent)
          position.y -= this.world.floatage
        }
      })
      .build()
  }
}