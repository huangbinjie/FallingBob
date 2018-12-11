import { AbstractActor } from "js-actor";
import { Update } from "../../renderer/Update";
import { World } from "../../renderer/world";
import { PositionComponent } from "../components/Position";
import { ShapeComponent } from "../components/Shape";

export class DeadSystem extends AbstractActor {
  constructor(private world: World) { super() }
  createReceive() {
    return this.receiveBuilder()
      .match(Update, () => {
        const playerPosition = this.world.player.get(PositionComponent)
        const playerShape = this.world.player.get(ShapeComponent)

        const playerY = playerPosition.y + playerShape.height
        const playerX1 = playerPosition.x
        const playerX2 = playerPosition.x + playerShape.width

        const obstacles = this.world.obstacleGroup.getEntities()
        for (let obstacle of obstacles) {
          const { x, y } = obstacle.get(PositionComponent)
          const shape = obstacle.get(ShapeComponent)

          const ox1 = x
          const ox2 = x + shape.width

          if (playerY > y) {
            // 障碍物在玩家左侧
            if (ox1 < playerX1 && playerX1 < ox2) {
              alert("你死了")
            }

            if (ox1 < playerX2 && playerX2 < ox2) {
              alert("你死了")
            }
          }
        }
      })
      .build()
  }
}