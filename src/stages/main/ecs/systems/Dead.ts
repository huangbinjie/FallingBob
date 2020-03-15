import { PositionComponent } from "../components/Position";
import { ShapeComponent } from "../components/Shape";
import BaseSystem from "./Base";

export default class DeadSystem extends BaseSystem {
  update() {
    const playerPosition = this.stage.player.getComponent(PositionComponent)
    const playerShape = this.stage.player.getComponent(ShapeComponent)

    const playerY1 = playerPosition.y
    const playerY2 = playerPosition.y + playerShape.height
    const playerX1 = playerPosition.x
    const playerX2 = playerPosition.x + playerShape.width

    const obstacles = this.stage.obstacleGroup.getEntities()
    for (let obstacle of obstacles) {
      const { x, y } = obstacle.getComponent(PositionComponent)
      const shape = obstacle.getComponent(ShapeComponent)

      const ox1 = x
      const oy1 = y
      const ox2 = x + shape.width
      const oy2 = y + shape.height

      if (playerY2 > oy1 && playerY1 < oy2) {
        // 障碍物在玩家左侧
        if (ox1 < playerX1 && playerX1 < ox2) {
          this.world.stoped = true
        }

        if (ox1 < playerX2 && playerX2 < ox2) {
          this.world.stoped = true
        }
      }
    }
  }
}
