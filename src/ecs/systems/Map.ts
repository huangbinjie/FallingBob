import { AbstractActor } from "js-actor"
import { Update } from "../../renderer/Update";
import { World } from "../../renderer/world";
import { PositionComponent } from "../components/Position";
import { ShapeComponent } from "../components/Shape";

export class MapSystem extends AbstractActor {
  constructor(private world: World) { super() }
  createReceive() {
    return this.receiveBuilder()
      .match(Update, () => {
        // 判断是否左右出界
        const position = this.world.player.get(PositionComponent)
        const { width, height } = this.world.player.get(ShapeComponent)

        if (position.x + width > this.world.worldWidth) {
          position.x = this.world.worldWidth - width
        } else if (position.x < 0) {
          position.x = 0
        } else if (position.y < 0 || position.y > this.world.worldHeight) {
          // dead
        }
      })
      .build()
  }
}