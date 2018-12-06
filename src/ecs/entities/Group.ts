import { Entity } from "./Entity";

export class Group {
  private entities = new Set<Entity>()

  getEntities() {
    return this.entities
  }

  addEntity(entity: Entity) {
    this.entities.add(entity)
    return this
  }
  
  removeEntity(entity: Entity) {
    this.entities.delete(entity)
  }
}