import { Entity } from "./Entity";
import { PlayerComponent } from "../components/Player";
import { PositionComponent } from "../components/Position";
import { ShapeComponent } from "../components/Shape";
import { ColorComponent } from "../components/Color";

export function createPlayer(width: number) {
  return Entity.create()
    .add(new PlayerComponent)
    .add(new ColorComponent("red"))
    .add(new ShapeComponent([
      [1, 1],
      [1, 1]
    ]))
    .add(new PositionComponent(width - 2, 0))
}
