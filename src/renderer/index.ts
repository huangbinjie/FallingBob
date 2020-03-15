import { PositionComponent } from "../stages/main/ecs/components/Position";
import { ShapeComponent } from "../stages/main/ecs/components/Shape";
import { ColorComponent } from "../stages/main/ecs/components/Color";
import { Entity } from "../../engine/ecs/entity";

export class Renderer {
  constructor(
    private ctx: CanvasRenderingContext2D,
    private worldWidth: number,
    private worldHeight: number
  ) { }

  drawBoard() {
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(0, 0, this.worldWidth, this.worldHeight)
    this.ctx.strokeStyle = "black"
    this.ctx.strokeRect(0, 0, this.worldWidth, this.worldHeight)
  }

  drawPlayer(player: Entity) {
    const { x, y } = player.getComponent(PositionComponent)
    const { width, height } = player.getComponent(ShapeComponent)
    const { value: color } = player.getComponent(ColorComponent)

    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, width, height)
  }

  drawObstacle(obstacle: Entity) {
    const { x, y } = obstacle.getComponent(PositionComponent)
    const { value: color } = obstacle.getComponent(ColorComponent)
    const { width, height } = obstacle.getComponent(ShapeComponent)

    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, width, height)
  }

  drawBonus(bonus: Entity) {
    const { x, y } = bonus.getComponent(PositionComponent)
    const { value: color } = bonus.getComponent(ColorComponent)
    const { width, height } = bonus.getComponent(ShapeComponent)

    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, width, height)
  }

  drawScore(score: number) {
    this.ctx.fillStyle = "red"
    this.ctx.fillText("分数: " + score, 10, 10)
  }

  checkOccupancy(dx: number, dy: number, shape: ShapeComponent) {
    const tx = dx + shape.width
    const ty = dx + shape.height
  }
}