import { UNIT } from "../constant"
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
    this.ctx.fillRect(0, 0, this.worldWidth * UNIT, this.worldHeight * UNIT)
    this.ctx.strokeStyle = "black"
    this.ctx.strokeRect(0, 0, this.worldWidth * UNIT, this.worldHeight * UNIT)
  }

  drawPlayer(player: Entity) {
    const { x, y } = player.get(PositionComponent)
    const { values: shapes } = player.get(ShapeComponent)
    const { value: color } = player.get(ColorComponent)

    this.ctx.fillStyle = color
    this.ctx.fillRect(x * UNIT / 2, y, shapes[0].length * UNIT, shapes.length * UNIT)
  }

  drawObstacle(obstacle: Entity) {
    const { x, y } = obstacle.get(PositionComponent)
    const { value: color } = obstacle.get(ColorComponent)
    const { values: shapes } = obstacle.get(ShapeComponent)

    this.ctx.fillStyle = color
    this.ctx.fillRect(x * UNIT, y * UNIT, shapes[0].length * UNIT, shapes.length * UNIT)
  }
}