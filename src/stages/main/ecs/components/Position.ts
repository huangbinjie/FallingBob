import { AbstractComponent } from "../../../../../engine/ecs/component";

export class PositionComponent extends AbstractComponent {
  constructor(public x: number, public y: number) { super() }
}
