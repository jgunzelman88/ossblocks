import { Scene } from 'babylonjs'
import { Chunk } from '../model/chunk';
import { World } from '../model/world';

export class WorldRender {
    public scene: Scene

    constructor(scene: Scene) {
        this.scene = scene
    }

    public renderWorld(world: World) {
        world.chunks.forEach((chunk => {
            this.renderChunk(chunk)
        }))
    }

    public renderChunk(chunk: Chunk) {
        chunk.planes.forEach((plane) => {
            plane.blocks.forEach((blockInstance) => {
                let x = blockInstance.x + chunk.x
                let y = plane.level + chunk.y
                let z = blockInstance.z + chunk.z
                blockInstance.block.render(this.scene, x, y, z)
            })
        })
    }
}