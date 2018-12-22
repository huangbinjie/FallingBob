import { Entity } from "./Entity";
import { PlayerComponent } from "../components/Player";
import { PositionComponent } from "../components/Position";
import { ShapeComponent } from "../components/Shape";
import { ColorComponent } from "../components/Color";
import { SpeedComponent } from "../components/Speed";

export function createPlayer(width: number) {
  const playerWidth = 32
  const playerHeight = 32
  return Entity.create()
    .add(new PlayerComponent)
    .add(new ColorComponent("red"))
    .add(new ShapeComponent(playerWidth, playerHeight))
    .add(new SpeedComponent(10))
    .add(new PositionComponent((width - playerWidth) / 2, 50))
}
