import { Entity } from "./Entity";
import { ObstacleComponent } from "../components/Obstacle";

export function createObstacle() {
  return Entity.create().add(new ObstacleComponent)
}
