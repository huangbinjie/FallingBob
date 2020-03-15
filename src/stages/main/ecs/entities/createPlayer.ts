import { PlayerComponent } from "../components/Player";
import { PositionComponent } from "../components/Position";
import { ShapeComponent } from "../components/Shape";
import { ColorComponent } from "../components/Color";
import { SpeedComponent } from "../components/Speed";
import { EntityManager } from "../../../../../engine/manager/entity";

export default function createPlayer(worldWidth: number) {
  const playerWidth = 32
  const playerHeight = 32
  // 默认左边居中
  const dx = (worldWidth / 2 - playerWidth) / 2

  return EntityManager.forOne()
    .addComponent(new PlayerComponent)
    .addComponent(new ColorComponent("red"))
    .addComponent(new ShapeComponent(playerWidth, playerHeight))
    .addComponent(new SpeedComponent(10))
    .addComponent(new PositionComponent(dx, 50))
}
