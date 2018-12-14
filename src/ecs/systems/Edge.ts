import { AbstractActor } from "js-actor"
import { World } from "../../renderer/world";
import { PositionComponent } from "../components/Position";
import { ShapeComponent } from "../components/Shape";
import { SpeedComponent } from "../components/Speed";

/**
 * 边界系统
 * 判断实体是否出界。
 * 障碍物可穿过边界。如果是障碍物，则移除。
 * 关键字：障碍，移除
 */
export function EdgeSystem(world: World) {
  // 判断障碍是否出界，移除。
  const obstacles = world.obstacleGroup.getEntities()
  for (let obstacle of obstacles) {
    const position = obstacle.get(PositionComponent)
    const { height } = obstacle.get(ShapeComponent)
    if (position.y + height < 0) {
      world.obstacleGroup.removeEntity(obstacle)
    }
  }

  const bonuses = world.bonusGroup.getEntities()
  for (let bonus of bonuses) {
    const position = bonus.get(PositionComponent)
    const { height } = bonus.get(ShapeComponent)
    if (position.y + height < 0) {
      world.obstacleGroup.removeEntity(bonus)
    }
  }
}