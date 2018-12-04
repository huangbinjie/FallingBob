import { WorldUitl } from "./renderer";

const canvas = document.getElementsByTagName("canvas")[0] || document.createElement("canvas")
canvas.setAttribute("width", "800")
canvas.setAttribute("height", "600")
document.body.appendChild(canvas)

const ctx = canvas.getContext("2d")
const util = new WorldUitl(ctx, genBoards(20, 20), 20, 20)
util.drawBoard()
util.drawPlayer()

function genBoards(row: number, col: number) {
  const boards = new Array(row);
  for (var i = 0; i < row; i++) {
    boards[i] = new Array(col);
    for (var j = 0; j < col; j++) {
      boards[i][j] = 0;
    }
  }

  const bkBoards = new Array(row);
  for (var i = 0; i < row; i++) {
    bkBoards[i] = new Array(col);
    for (var j = 0; j < col; j++) {
      bkBoards[i][j] = 0;
    }
  }
  return boards
}