import { Entity } from "./Entity";
import { ObstacleComponent } from "../components/Obstacle";
import { PositionComponent } from "../components/Position";

export function createObstacle(worldWidth: number, worldHeight: number) {
  const position: [number, number] = Math.floor(Math.random() * 100) % 2 ? [0, worldHeight] : [worldWidth, worldHeight]
  
  return Entity.create()
    .add(new ObstacleComponent)
    .add(new PositionComponent(...position))
}
