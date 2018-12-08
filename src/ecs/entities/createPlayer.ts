import { Entity } from "./Entity";
import { PlayerComponent } from "../components/Player";
import { PositionComponent } from "../components/Position";
import { ShapeComponent } from "../components/Shape";
import { ColorComponent } from "../components/Color";

const playerWidth = 16
const playerHeight = 16

export function createPlayer(width: number) {
  return Entity.create()
    .add(new PlayerComponent)
    .add(new ColorComponent("red"))
    .add(new ShapeComponent(16, 16))
    .add(new PositionComponent((width - playerWidth) / 2, playerHeight))
}
