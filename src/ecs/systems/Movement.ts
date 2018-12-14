import { AbstractActor } from "js-actor"
import { World } from "../../renderer/world";
import { PositionComponent } from "../components/Position";
import { SpeedComponent } from "../components/Speed";
import { ShapeComponent } from "../components/Shape";

export function MovementSystem(world: World) {
  const position = world.player.get(PositionComponent)
  const { speed } = world.player.get(SpeedComponent)
  const { width } = world.player.get(ShapeComponent)
  const movement = world.movement

  if (movement[37]) {
    position.x -= speed
  } else if (movement[39]) {
    position.x += speed
  }

  // 判断玩家是否左右出界
  if (position.x + width > world.worldWidth) {
    position.x = world.worldWidth - width - speed
  } else if (position.x < 0) {
    position.x = 0 + speed
  }
}