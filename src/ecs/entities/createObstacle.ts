import { Entity } from "./Entity";
import { ObstacleComponent } from "../components/Obstacle";
import { PositionComponent } from "../components/Position";
import { ColorComponent } from "../components/Color";
import { ShapeComponent } from "../components/Shape";
import { SpeedComponent } from "../components/Speed";

export function createObstacle(worldWidth: number, worldHeight: number) {
  const obsWidth = 100
  const obsHeight = 20
  const x = Math.floor(Math.random() * 100) % (worldWidth - obsWidth)
  const y = worldHeight

  return Entity.create()
    .add(new ObstacleComponent)
    .add(new PositionComponent(x, y))
    .add(new ColorComponent("black"))
    .add(new ShapeComponent(obsWidth, obsHeight))
    .add(new SpeedComponent(0))
}
