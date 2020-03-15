import { PositionComponent } from "../components/Position";
import { ShapeComponent } from "../components/Shape";
import BaseSystem from "./Base";

/**
 * 边界系统
 * 判断实体是否出界。
 * 障碍物可穿过边界。如果是障碍物，则移除。
 */
export class EdgeSystem extends BaseSystem {
  update() {
    // 判断障碍是否出界，移除。
    const obstacles = this.stage.obstacleGroup.getEntities()
    for (let obstacle of obstacles) {
      const position = obstacle.getComponent(PositionComponent)
      const { height } = obstacle.getComponent(ShapeComponent)
      if (position.y + height < 0) {
        this.stage.obstacleGroup.removeEntity(obstacle)
      }
    }

    // const bonuses = world.bonusGroup.getEntities()
    // for (let bonus of bonuses) {
    //   const position = bonus.get(PositionComponent)
    //   const { height } = bonus.get(ShapeComponent)
    //   if (position.y + height < 0) {
    //     world.obstacleGroup.removeEntity(bonus)
    //   }
    // }
  }
}