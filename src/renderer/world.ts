import { WorldUtil } from "./world_util";
import { Entity } from "../ecs/entities/Entity";
import { PlayerComponent } from "../ecs/components/Player";
import { Group } from "../ecs/entities/Group";
import { ActorSystem } from "js-actor";
import { createPlayer } from "../ecs/entities/createPlayer";
import { MovementSystem } from "../ecs/systems/Movement";
import { ObstacleSystem } from "../ecs/systems/Obstacle";
import { EdgeSystem } from "../ecs/systems/Edge";
import { FloatageSystem } from "../ecs/systems/Floatage"
import { DeadSystem } from "../ecs/systems/Dead";
import { BonusSystem } from "../ecs/systems/Bonus";
import { ScoreSystem } from "../ecs/systems/Score";

export class World {
  private systems: Array<(world: World) => void> = []
  public player = createPlayer(this.worldWidth)
  public obstacleGroup = new Group()
  public bonusGroup = new Group()
  public floatage = 2 // 浮力。人物看成不动的，障碍物在往上浮。对应游戏难度。
  public tickTime = 0
  public movement: { 37: boolean, 39: boolean } = { 37: false, 39: false }
  public worldUtil = new WorldUtil(this.ctx, this.boards, this.worldWidth, this.worldHeight)
  public stoped = false
  public score = 0

  constructor(
    private ctx: CanvasRenderingContext2D,
    public boards: number[][],
    public worldWidth: number,
    public worldHeight: number
  ) { }

  start() {
    window.addEventListener("keydown", event => {
      const code = event.keyCode
      if (code === 37 || code === 39) {
        this.movement[code] = true
      }
    }, true)

    window.addEventListener('keyup', event => {
      const code = event.keyCode
      if (code === 37 || code === 39) {
        this.movement[code] = false
      }
    }, true)
    this.systems.push(MovementSystem)
    this.systems.push(EdgeSystem)
    this.systems.push(BonusSystem)
    this.systems.push(ScoreSystem)
    this.systems.push(ObstacleSystem)
    this.systems.push(FloatageSystem)
    this.systems.push(DeadSystem)
    this.update()
  }

  update() {
    if (this.stoped) return
    this.tickTime++
    this.systems.forEach(system => system(this))
    this.worldUtil.drawBoard()
    this.worldUtil.drawPlayer(this.player)
    for (let obstacle of this.obstacleGroup.getEntities()) {
      this.worldUtil.drawObstacle(obstacle)
    }
    for (let bonus of this.bonusGroup.getEntities()) {
      this.worldUtil.drawBonus(bonus)
    }
    this.worldUtil.drawScore(this.score)
    requestAnimationFrame(() => this.update())
  }
}
