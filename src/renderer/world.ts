import { WorldUtil } from "./world_util";
import { Entity } from "../ecs/entities/Entity";
import { PlayerComponent } from "../ecs/components/Player";
import { Group } from "../ecs/entities/Group";
import { ActorSystem } from "js-actor";
import { Update } from "./Update";
import { createPlayer } from "../ecs/entities/createPlayer";

export class World {
  private system = new ActorSystem("fallingbob")
  public player = createPlayer(this.worldWidth)
  public obstacleGroup = new Group()
  public floatage = 1 // 浮力。人物看成不动的，障碍物在往上浮。对应游戏难度。
  public worldUtil = new WorldUtil(this.ctx, this.boards, this.worldWidth, this.worldHeight)

  constructor(
    private ctx: CanvasRenderingContext2D,
    private boards: number[][],
    private worldWidth: number,
    private worldHeight: number
  ) { }

  start() {
    this.update()
  }

  update() {
    this.system.broadcast(new Update)
    this.worldUtil.drawBoard()
    this.worldUtil.drawPlayer(this.player)
    for (let obstacle of this.obstacleGroup.getEntities()) {
      this.worldUtil.drawObstacle(obstacle)
    }
    requestAnimationFrame(() => this.update())
  }
}
