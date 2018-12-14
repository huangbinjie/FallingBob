import { AbstractActor } from "js-actor"
import { World } from "../../renderer/world";
import { createObstacle } from "../entities/createObstacle";
import { getRandomNum } from "../utils/getRandomNum";

/**
 * 障碍物系统
 * 判断是否有必要生成障碍。
 * 如果上一次生成间隔大于40帧，则重新生成。
 * 关键字：40个，生成
 */
export function ObstacleSystem(world: World) {
  const maxGapTick = Math.floor(GAP_TICK * MAX_GAP_TICK_COEFFICIENT)
  const minGapTick = Math.floor(GAP_TICK * MIN_GAP_TICK_COEFFICIENT)
  const gapTick = getRandomNum(minGapTick, maxGapTick)

  if (world.tickTime % (gapTick + GAP_TICK) === 0) {
    const obstacle = createObstacle(world.worldWidth, world.worldHeight)
    world.obstacleGroup.addEntity(obstacle)
  }
}

const GAP_TICK = 100
const MIN_GAP_TICK_COEFFICIENT = .5
const MAX_GAP_TICK_COEFFICIENT = 1.5