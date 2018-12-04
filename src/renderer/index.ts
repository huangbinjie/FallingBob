import { UNIT } from "../constant";

export class WorldUitl {
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

  drawPlayer() {
    this.ctx.fillStyle = "black"
    this.ctx.fillRect((this.worldWidth - 2) * UNIT / 2, 0, 2 * UNIT, 2 * UNIT)
  }
}