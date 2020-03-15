import { AbstractSystem } from "../../../../../engine/ecs/system"
import { World } from "../../../../world"
import { MainStage } from "../.."

export default abstract class BaseSystem extends AbstractSystem {
  world!: World
  stage!: MainStage
}
