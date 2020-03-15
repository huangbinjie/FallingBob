import { AbstractActor } from "js-actor";
import { AbstractWorld } from "../world";
import { AbstractStage } from "../stage";

export class AbstractSystem extends AbstractActor {
  world!: AbstractWorld
  stage!: AbstractStage

  update() { }

  createReceive() {
    return this.receiveBuilder().build()
  }
}
