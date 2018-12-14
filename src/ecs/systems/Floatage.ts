import { AbstractActor } from "js-actor";
import { World } from "../../renderer/world";
import { PositionComponent } from "../components/Position";
import { SpeedComponent } from "../components/Speed";

/**
 * 浮力系统。
 * 根据 floatage 数值大小改变障碍物的 y 坐标
 */
export function FloatageSystem(world: World) {
  const obstacles = world.obstacleGroup.getEntities()
  const bonuses = world.bonusGroup.getEntities()

  for (let obstacle of obstacles) {
    const position = obstacle.get(PositionComponent)
    const { speed } = obstacle.get(SpeedComponent)
    position.x += speed
    position.y -= world.floatage
  }
  for (let bonus of bonuses) {
    const position = bonus.get(PositionComponent)
    const { speed } = bonus.get(SpeedComponent)
    position.x += speed
    position.y -= world.floatage
  }
}