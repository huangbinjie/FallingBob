import { ObstacleComponent } from "../components/Obstacle";
import { PositionComponent } from "../components/Position";
import { ColorComponent } from "../components/Color";
import { ShapeComponent } from "../components/Shape";
import { SpeedComponent } from "../components/Speed";
import { EntityManager } from "../../../../../engine/manager/entity";

export function createObstacle(dx: number, dy: number, width: number, height: number) {
  return EntityManager.forOne()
    .addComponent(new ObstacleComponent)
    .addComponent(new PositionComponent(dx, dy))
    .addComponent(new ColorComponent("black"))
    .addComponent(new ShapeComponent(width, height))
    .addComponent(new SpeedComponent(0))
}

