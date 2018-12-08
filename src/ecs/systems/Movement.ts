import { AbstractActor } from "js-actor"
import { Update } from "../../renderer/Update";
import { World } from "../../renderer/world";
import { PositionComponent } from "../components/Position";

export class MovementSystem extends AbstractActor {
  constructor(private world: World) { super() }
  createReceive() {
    return this.receiveBuilder()
      .match(Update, () => {
        const playerPosition = this.world.player.get(PositionComponent)
        const movement = this.world.movement
        if (movement[37]) {
          playerPosition.x -= 10
        } else if (movement[39]) {
          playerPosition.x += 10
        }
      })
      .build()
  }
}