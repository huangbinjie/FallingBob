import { BaseStage } from "../Base";
import createPlayer from "./ecs/entities/createPlayer";
import { MovementSystem } from "./ecs/systems/Movement";
import { EdgeSystem } from "./ecs/systems/Edge";
import { ObstacleSystem } from "./ecs/systems/Obstacle";
import { FloatageSystem } from "./ecs/systems/Floatage";
import DeadSystem from "./ecs/systems/Dead";
import { EntityManager } from "../../../engine/manager/entity";
import { Entity } from "../../../engine/ecs/entity";

export class MainStage extends BaseStage {
  player!: Entity
  obstacleGroup = EntityManager.forGroup()

  preStart() {
    this.player = createPlayer(this.world.worldWidth)

    this.addSystem(new MovementSystem)
    this.addSystem(new EdgeSystem)
    this.addSystem(new ObstacleSystem)
    this.addSystem(new FloatageSystem)
    this.addSystem(new DeadSystem)
  }

  update() {
    if (this.world.stoped) {
      return
    }
    this.world.tickTime++
    this.world.renderer.drawBoard()
    this.world.renderer.drawPlayer(this.player)
    for (let obstacle of this.obstacleGroup.getEntities()) {
      this.world.renderer.drawObstacle(obstacle)
    }
    this.world.renderer.drawScore(this.world.score)
  }
}