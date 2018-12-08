import { Entity } from "../ecs/entities/Entity";
import { PositionComponent } from "../ecs/components/Position";
import { ShapeComponent } from "../ecs/components/Shape";
import { ColorComponent } from "../ecs/components/Color";

export class WorldUtil {
  constructor(
    private ctx: CanvasRenderingContext2D,
    private boards: number[][],
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
    const { x, y } = player.get(PositionComponent)
    const { width, height } = player.get(ShapeComponent)
    const { value: color } = player.get(ColorComponent)

    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, width, height)
  }

  drawObstacle(obstacle: Entity) {
    const { x, y } = obstacle.get(PositionComponent)
    const { value: color } = obstacle.get(ColorComponent)
    const { width, height } = obstacle.get(ShapeComponent)

    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, width, height)
  }

  checkOccupancy(dx: number, dy: number, shape: ShapeComponent) {
    const tx = dx + shape.width
    const ty = dx + shape.height
  }
}