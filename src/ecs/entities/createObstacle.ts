import { Entity } from "./Entity";
import { ObstacleComponent } from "../components/Obstacle";
import { PositionComponent } from "../components/Position";
import { ColorComponent } from "../components/Color";
import { ShapeComponent } from "../components/Shape";

export function createObstacle(worldWidth: number, worldHeight: number) {
  const obsWidth = 100
  const obsHeight = 20
  const position: [number, number] = Math.floor(Math.random() * 100) % 2 ? [0, worldHeight - obsHeight] : [worldWidth - obsWidth, worldHeight - obsHeight]

  return Entity.create()
    .add(new ObstacleComponent)
    .add(new PositionComponent(...position))
    .add(new ColorComponent("black"))
    .add(new ShapeComponent(obsWidth, obsHeight))
}
