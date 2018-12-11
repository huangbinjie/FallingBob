import { AbstractActor } from "js-actor"
import { Update } from "../../renderer/Update";
import { World } from "../../renderer/world";
import { PositionComponent } from "../components/Position";
import { ShapeComponent } from "../components/Shape";

/**
 * 边界系统
 * 判断实体是否出界。
 * 玩家不可穿过边界，如果是玩家，回到边界内。
 * 障碍物可穿过边界。如果是障碍物，则移除。
 * 关键字： 玩家，障碍，回到，移除
 */
export class EdgeSystem extends AbstractActor {
  constructor(private world: World) { super() }
  createReceive() {
    return this.receiveBuilder()
      .match(Update, () => {
        const position = this.world.player.get(PositionComponent)
        const { width } = this.world.player.get(ShapeComponent)

        // 判断玩家是否左右出界
        if (position.x + width > this.world.worldWidth) {
          position.x = this.world.worldWidth - width
        } else if (position.x < 0) {
          position.x = 0
        }

        // 判断障碍是否出界，移除。
        const obstacles = this.world.obstacleGroup.getEntities()
        for (let obstacle of obstacles) {
          const position = obstacle.get(PositionComponent)
          const { height } = obstacle.get(ShapeComponent)
          if (position.y + height < 0) {
            this.world.obstacleGroup.removeEntity(obstacle)
          }
        }
      })
      .build()
  }
}