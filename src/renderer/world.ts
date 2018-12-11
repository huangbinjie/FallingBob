import { WorldUtil } from "./world_util";
import { Entity } from "../ecs/entities/Entity";
import { PlayerComponent } from "../ecs/components/Player";
import { Group } from "../ecs/entities/Group";
import { ActorSystem } from "js-actor";
import { Update } from "./Update";
import { createPlayer } from "../ecs/entities/createPlayer";
import { InputSystem } from "../ecs/systems/Input";
import { MovementSystem } from "../ecs/systems/Movement";
import { ObstacleSystem } from "../ecs/systems/Obstacle";
import { Start } from "./Start";
import { EdgeSystem } from "../ecs/systems/Edge";
import { FloatageSystem } from "../ecs/systems/Floatage"
import { DeadSystem } from "../ecs/systems/Dead";

export class World {
  private system = new ActorSystem("fallingbob")
  public player = createPlayer(this.worldWidth)
  public obstacleGroup = new Group()
  public floatage = 2 // 浮力。人物看成不动的，障碍物在往上浮。对应游戏难度。
  public tickTime = 0
  public movement: { 37: boolean, 39: boolean } = { 37: false, 39: false }
  public worldUtil = new WorldUtil(this.ctx, this.boards, this.worldWidth, this.worldHeight)
  public stoped = false

  constructor(
    private ctx: CanvasRenderingContext2D,
    public boards: number[][],
    public worldWidth: number,
    public worldHeight: number
  ) { }

  start() {
    this.system.actorOf(new InputSystem(this))
    this.system.actorOf(new MovementSystem(this))
    this.system.actorOf(new EdgeSystem(this))
    this.system.actorOf(new ObstacleSystem(this))
    this.system.actorOf(new FloatageSystem(this))
    this.system.actorOf(new DeadSystem(this))
    this.broadcast(new Start)
    this.update()
  }

  update() {
    this.tickTime++
    this.system.broadcast(new Update)
    this.worldUtil.drawBoard()
    this.worldUtil.drawPlayer(this.player)
    for (let obstacle of this.obstacleGroup.getEntities()) {
      this.worldUtil.drawObstacle(obstacle)
    }
    requestAnimationFrame(() => this.update())
  }

  broadcast(message: object) {
    this.system.broadcast(message)
  }
}
