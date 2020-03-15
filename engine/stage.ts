import { AbstractWorld } from "./world";
import { Entity } from "./ecs/entity";
import { ActorSystem } from "js-actor";
import { AbstractSystem } from "./ecs/system";

export abstract class AbstractStage {
  private systemHub = new ActorSystem("ecs")
  private entities: Entity[] = []
  private systems: AbstractSystem[] = []

  public world!: AbstractWorld

  public addEntity(entity: Entity) {
    this.entities.push(entity)
  }

  public removeEntity(entity: Entity) {
    this.entities.splice(this.entities.indexOf(entity))
  }

  public getEntities() {
    return this.entities
  }

  public addSystem<T extends AbstractSystem>(system: T) {
    system.world = this.world
    system.stage = this
    this.systems.push(system)
    this.systemHub.actorOf(system)
  }

  public getSystems() {
    return this.systems
  }

  // 广播到所有系统中
  public broadcast(event: object) {
    this.systemHub.eventStream.emit("**", event)
  }

  public preStart() {

  }

  public postStop() {

  }

  public update() {

  }
}