// import { Entity } from "./Entity";
// import { BonusComponent } from "../components/Bonus";
// import { SpeedComponent } from "../components/Speed";
// import { PositionComponent } from "../components/Position";
// import { ShapeComponent } from "../components/Shape";
// import { ColorComponent } from "../components/Color";

// export function createBalloon(worldWidth: number, worldHeight: number) {
//   const width = 50
//   const height = 100
//   const x = Math.floor(Math.random() * 100) % (worldWidth - width)
//   const y = worldHeight

//   return Entity.create()
//     .add(new BonusComponent(10))
//     .add(new SpeedComponent(0))
//     .add(new PositionComponent(x, y))
//     .add(new ShapeComponent(width, height))
//     .add(new ColorComponent("green"))
// }