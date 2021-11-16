import { BLOCK_REGISTRY } from "./block-registry"
import { BlockInstance } from "../model/block"
import { Chunk, CHUNK_SIZE } from "../model/chunk"

export function createChunk(seed: string, x: number, y: number, z: number): Chunk {
    let chunk = new Chunk(0, x, y, z)
    chunk.planes.push({level: 0, blocks: createFlatPlane()})
    return chunk
}

function createFlatPlane(): Array<BlockInstance> {
    let blocks = new Array<BlockInstance>()
    let bedrock = BLOCK_REGISTRY.getBlockByID('0')
    if (bedrock != null) {
        for (let x = 0; x < CHUNK_SIZE; x++) {
            for (let z = 0; z < CHUNK_SIZE; z++) {
                blocks.push({ block: bedrock, x: x, z: z })
            }
        }
    }
    return blocks;
}