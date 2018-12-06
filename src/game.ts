import { World } from "./renderer/world";

let canvas
if (document.getElementsByTagName("canvas")[0]) {
  canvas = document.getElementsByTagName("canvas")[0]
} else {
  canvas = document.createElement("canvas")
  document.body.appendChild(canvas)
}
canvas.setAttribute("width", "800")
canvas.setAttribute("height", "600")

const ctx = canvas.getContext("2d")!
const world = new World(ctx, genBoards(20, 30), 20, 30)

world.start()

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