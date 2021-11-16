import { Scene } from "babylonjs"

export enum BlockType {
    "BASIC", // Basic blocks are all the same.
    "INSTANCE" // Instance blocks are unique.
}

export type BlockInstance = {
    block: Block
    x: number
    z: number
}
/**
 * Block is the smallest unit of contruction
 */
export class Block {
    public id: string
    public type: BlockType
    public label: string
    
    constructor(id: string, type: BlockType, label: string){
        this.id = id
        this.type = type
        this.label = label
    }

    public render(scene: Scene, x: number, y: number, z: number){}
}
