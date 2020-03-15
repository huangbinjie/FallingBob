import { Entity, EntityGroup } from '../ecs/entity'

export class EntityManager {
  static forOne() {
    return new Entity()
  }

  static forGroup() {
    return new EntityGroup()
  }
}
