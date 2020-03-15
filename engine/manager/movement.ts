export enum Movement {
  None,
  Up,
  Down,
  Left,
  Right,
  Click,
  Tap
}

export class MovementManager {
  static movement = Movement.None

  static listen() {
    window.addEventListener('keydown', event => {
      if (event.keyCode === 37) {
        MovementManager.movement = Movement.Left
      }

      if (event.keyCode === 39) {
        MovementManager.movement = Movement.Right
      }
    })

    window.addEventListener('keyup', event => {
      MovementManager.movement = Movement.None
    })

    window.addEventListener('mousedown', evnet => {
      MovementManager.movement = Movement.Click
    })

    window.addEventListener('mouseup', evnet => {
      MovementManager.movement = Movement.None
    })

    window.addEventListener('touchstart', event => {
      MovementManager.movement = Movement.Tap
    })

    window.addEventListener('touchsend', event => {
      MovementManager.movement = Movement.None
    })
  }
}
