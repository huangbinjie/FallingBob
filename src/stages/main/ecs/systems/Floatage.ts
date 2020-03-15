import { PositionComponent } from "../components/Position";
import BaseSystem from "./Base";

/**
 * 浮力系统。
 * 根据 floatage 数值大小改变障碍物的 y 坐标
 */
export class FloatageSystem extends BaseSystem {
  update() {
    const obstacles = this.stage.obstacleGroup.getEntities()

    for (let obstacle of obstacles) {
      const position = obstacle.getComponent(PositionComponent)
      position.y -= this.world.floatage
    }
  }
}
