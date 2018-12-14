import { World } from "../../renderer/world";
import { createBalloon } from "../entities/createBalloon";

export function BonusSystem(world: World) {
  if (world.tickTime % 500 === 0) {
    const balloon = createBalloon(world.worldWidth, world.worldHeight)
    world.bonusGroup.addEntity(balloon)
  }
}