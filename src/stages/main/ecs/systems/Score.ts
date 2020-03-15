// import { World } from "../../world";
// import { PositionComponent } from "../components/Position";
// import { ShapeComponent } from "../components/Shape";
// import { BonusComponent } from "../components/Bonus";

// export function ScoreSystem(world: World) {
//   const playerPosition = world.player.get(PositionComponent)
//   const playerShape = world.player.get(ShapeComponent)

//   const playerY1 = playerPosition.y
//   const playerY2 = playerPosition.y + playerShape.height
//   const playerX1 = playerPosition.x
//   const playerX2 = playerPosition.x + playerShape.width

//   const bonuses = world.bonusGroup.getEntities()
//   for (let bonus of bonuses) {
//     const { x, y } = bonus.get(PositionComponent)
//     const shape = bonus.get(ShapeComponent)
//     const { score } = bonus.get(BonusComponent)

//     const ox1 = x
//     const oy1 = y
//     const ox2 = x + shape.width
//     const oy2 = y + shape.height

//     if (playerY2 > oy1 && playerY1 < oy2) {
//       // 在玩家左侧
//       if (ox1 < playerX1 && playerX1 < ox2) {
//         world.score += score
//         world.bonusGroup.removeEntity(bonus)
//       }

//       if (ox1 < playerX2 && playerX2 < ox2) {
//         world.score += score
//         world.bonusGroup.removeEntity(bonus)
//       }
//     }
//   }
// }