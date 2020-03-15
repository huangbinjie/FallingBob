import { World } from "../../../../world";
import { createObstacle } from "../entities/createObstacle";
import BaseSystem from "./Base";

/**
 * 障碍物系统
 * 判断是否有必要生成障碍。
 * 如果上一次生成间隔大于40帧，则重新生成。
 */
export class ObstacleSystem extends BaseSystem {
  private tick = 0
  private gapTick = GAP_TICK

  update() {
    const maxGapTick = Math.floor(GAP_TICK * MAX_GAP_TICK_COEFFICIENT)

    this.tick++

    if (this.tick >= this.gapTick) {
      const obstacle = createObstacle(nextDx(this.world.worldWidth), this.world.worldHeight, OBSTACLE_WIDTH, OBSTACLE_HEIGHT)
      this.stage.obstacleGroup.addEntity(obstacle)
      this.tick = 0
      this.gapTick = getRandomGap(GAP_TICK, maxGapTick)
    }
  }
}

export function getRandomGap(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function nextDx(worldWidth: number) {
  const x = Math.floor(Math.random() * 2)

  if (x === 0) {
    return 0
  }

  if (x === 1) {
    return worldWidth - OBSTACLE_WIDTH
  }

  if (x === 2) {
    return (worldWidth - OBSTACLE_WIDTH) / 2
  }

  return 0
}

const OBSTACLE_WIDTH = 150
const OBSTACLE_HEIGHT = 20

const GAP_TICK = 30
const MAX_GAP_TICK_COEFFICIENT = 1.5
