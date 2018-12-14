import { AbstractActor } from "js-actor";
import { World } from "../../renderer/world";
import { PositionComponent } from "../components/Position";
import { ShapeComponent } from "../components/Shape";

export function DeadSystem(world: World) {
  const playerPosition = world.player.get(PositionComponent)
  const playerShape = world.player.get(ShapeComponent)

  const playerY1 = playerPosition.y
  const playerY2 = playerPosition.y + playerShape.height
  const playerX1 = playerPosition.x
  const playerX2 = playerPosition.x + playerShape.width

  const obstacles = world.obstacleGroup.getEntities()
  for (let obstacle of obstacles) {
    const { x, y } = obstacle.get(PositionComponent)
    const shape = obstacle.get(ShapeComponent)

    const ox1 = x
    const oy1 = y
    const ox2 = x + shape.width
    const oy2 = y + shape.height

    if (playerY2 > oy1 && playerY1 < oy2) {
      // 障碍物在玩家左侧
      if (ox1 < playerX1 && playerX1 < ox2) {
        world.stoped = true
      }

      if (ox1 < playerX2 && playerX2 < ox2) {
        world.stoped = true
      }
    }
  }
}