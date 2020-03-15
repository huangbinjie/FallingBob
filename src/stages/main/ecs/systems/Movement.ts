import { PositionComponent } from "../components/Position";
import { SpeedComponent } from "../components/Speed";
import { ShapeComponent } from "../components/Shape";
import { MovementManager, Movement } from "../../../../../engine/manager/movement";
import BaseSystem from "./Base";

enum Moving {
  Left,
  Right,
  None
}

export class MovementSystem extends BaseSystem {
  leftDx!: number
  rightDx!: number
  moving: Moving = Moving.None

  preStart() {
    this.leftDx = (this.world.worldWidth / 2 - this.stage.player.getComponent(ShapeComponent).width) / 2
    this.rightDx = this.world.worldWidth - this.leftDx - this.stage.player.getComponent(ShapeComponent).width
  }

  update() {
    const position = this.stage.player.getComponent(PositionComponent)
    const { speed } = this.stage.player.getComponent(SpeedComponent)
    const movement = MovementManager.movement

    if (movement === Movement.Tap && this.moving === Moving.None) {
      // 在左边，往右移动
      if (position.x === this.leftDx) {
        this.moving = Moving.Right
      }

      // 在右边，往左移动
      if (position.x === this.rightDx) {
        this.moving = Moving.Left
      }
    }

    if (this.moving !== Moving.None) {
      if (this.moving === Moving.Left) {
        position.x -= speed

        if (position.x < this.leftDx) {
          position.x = this.leftDx

          if (movement === Movement.None) {
            this.moving = Moving.None
          }
        }
      }

      if (this.moving === Moving.Right) {
        position.x += speed

        if (position.x > this.rightDx) {
          position.x = this.rightDx

          if (movement === Movement.None) {
            this.moving = Moving.None
          }
        }
      }
    }

    // let nextX = position.x

    // if (movement === Movement.Left) {
    //   nextX -= speed
    // } else if (movement === Movement.Right) {
    //   nextX += speed
    // }

    // 判断玩家是否左右出界
    // if (nextX + width > this.world.worldWidth) {
    //   position.x = this.world.worldWidth - width
    // } else if (nextX < 0) {
    //   position.x = 0
    // } else {
    //   position.x = nextX
    // }
  }
}
