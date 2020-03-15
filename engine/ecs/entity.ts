import { AbstractComponent } from "./component"

export class Entity {
  public components: AbstractComponent[] = []

  public addComponent(comp: AbstractComponent) {
    this.components.push(comp)
    return this
  }

  public getComponent<T extends AbstractComponent>(comp: new (...args: any[]) => T) {
    return this.components[this.components.findIndex(_comp => _comp instanceof comp)] as T
  }

  public removeComponent(comp: new (...args: any[]) => AbstractComponent) {
    this.components.splice(this.components.indexOf(comp))
  }
}

export class EntityGroup {
  private entities: Entity[] = []

  getEntities() {
    return this.entities
  }

  addEntity(entity: Entity) {
    this.entities.push(entity)
    return this
  }

  removeEntity(entity: Entity) {
    this.entities.splice(this.entities.indexOf(entity), 1)
  }

  get size() {
    return this.entities.length
  }
}
