export enum BlockType {
    "BASIC", // Basic blocks are all the same.
    "INSTANCE" // Instance blocks are unique.
}
/**
 * Block is the smallest unit of contruction
 */
export class Block {
    public id: string
    public type: BlockType
    public label: string
    public render?: Function

    constructor(id: string, type: BlockType, label: string,
        render?: Function){
        this.id = id
        this.type = type
        this.label = label
        
    }
}

export const Bedrock : Block = 
{
    id: '0',
    type : BlockType.BASIC,
    label : 'bedrock'
}