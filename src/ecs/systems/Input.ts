// import { AbstractActor } from "js-actor"
// import { Update } from "../../renderer/Update";
// import { World } from "../../renderer/world";
// import { createObstacle } from "../entities/createObstacle";
// import { Start } from "../../renderer/Start";
// import { PositionComponent } from "../components/Position";

// export class InputSystem extends AbstractActor {
//   constructor(private world: World) { super() }
//   createReceive() {
//     return this.receiveBuilder()
//       .match(Start, () => {
//         window.addEventListener("keydown", event => {
//           const code = event.keyCode
//           if (code === 37 || code === 39) {
//             this.world.movement[code] = true
//           }
//         }, true)

//         window.addEventListener('keyup', event => {
//           const code = event.keyCode
//           if (code === 37 || code === 39) {
//             this.world.movement[code] = false
//           }
//         }, true);
//       })
//       .build()
//   }
// }

// export class Keydown {
//   constructor(public keycode: number) {

//   }
// }