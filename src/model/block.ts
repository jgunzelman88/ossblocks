/***
 * Block is the smallest unit of contruction
 */
export class Block {
    public id: string
    public type: BlockType
    public label: string
    public durability: string

    constructor(id: string, type: BlockType, label: string, durability: string){
        this.id = id
        this.type = type
        this.label = label
        this.durability = durability
    }
}

export enum BlockType {
    "BASIC", // Basic blocks are all the same.
    "INSTANCE" // Instance blocks are unique.
}