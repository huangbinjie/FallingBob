import { World } from "./world";
import { Game } from "../engine/game";
import { StageManager } from "../engine/manager/stage";
import { MainStage } from "./stages/main";


const canvas = document.getElementsByTagName("canvas")[0]

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")!

ctx.scale(window.innerWidth / screen.width, window.innerHeight / screen.height)
const world = new World(ctx, screen.width, screen.height)

const game = new Game({})

StageManager.of(world).replace(new MainStage())

game.run()
