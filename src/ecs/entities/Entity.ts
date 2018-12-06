import { IComponent } from "../components/IComponent";

export type CC = new () => IComponent

export class Entity {
  private values = new Set<IComponent>()

  static create() {
    return new Entity
  }

  has(componentClass: new () => IComponent) {
    for (let component of this.values) {
      if (component instanceof componentClass) {
        return true
      }
    }
    return false
  }

  get<T extends IComponent>(componentClass: new (...arg: any[]) => T): T {
    for (let component of this.values) {
      if (component instanceof componentClass) {
        return component
      }
    }

    return null as any
  }

  add(component: IComponent) {
    this.values.add(component)
    return this
  }

  get size() {
    return this.values.size
  }
}