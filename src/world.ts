import { Renderer } from "./renderer";
import { MovementSystem } from "./stages/main/ecs/systems/Movement";
import { ObstacleSystem } from "./stages/main/ecs/systems/Obstacle";
import { EdgeSystem } from "./stages/main/ecs/systems/Edge";
import { FloatageSystem } from "./stages/main/ecs/systems/Floatage"
import DeadSystem from "./stages/main/ecs/systems/Dead";
import { AbstractWorld } from "../engine/world";

export class World extends AbstractWorld {
  public floatage = 5 // 浮力。人物看成不动的，障碍物在往上浮。对应游戏难度。
  public renderer = new Renderer(this.ctx, this.worldWidth, this.worldHeight)
  public stoped = false
  public score = 0

  constructor(
    private ctx: CanvasRenderingContext2D,
    public worldWidth: number,
    public worldHeight: number
  ) { super() }
}
