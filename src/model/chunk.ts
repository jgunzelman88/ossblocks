import { Block, BlockInstance } from "./block"

export const CHUNK_SIZE = 32

export type Plane = {
    level: number
    blocks: BlockInstance[]
}
export class Chunk {

    public id: number
    public planes: Plane[] = new Array()
    public x: number
    public y: number
    public z: number

    constructor(id: number, x: number, y: number, z: number) {
        this.id = id
        this.x = x
        this.y = y
        this.z = z
    }
}