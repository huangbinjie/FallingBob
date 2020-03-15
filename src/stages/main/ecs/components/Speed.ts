import { AbstractComponent } from "../../../../../engine/ecs/component";

export class SpeedComponent extends AbstractComponent {
  constructor(public speed: number) { super() }
}
