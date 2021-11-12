import { Block, BlockType } from '../model/block'
import { v4 as uuidv4 } from 'uuid'

/**
 * Registry for all block types both instance and basic.
 */
export class BlockRegistry {
    private static basicBlocks: Map<string, Block> = new Map<string, Block>()
    private static labelIndex: Map<string, string | string[]> = new Map<string, string | string[]>()
    private static instanceBlocks: Map<string, Block> = new Map<string, Block>()

    /**
     * Register a basic block to the registry
     * @param block 
     * @returns returns an error if the BlockType is wrong or if there is already a block sregistered with the same label
     */
    public static registerBasicBlock(block: Block): Error | void {
        if (block.type != BlockType.BASIC) {
            if (this.labelIndex.has(block.label)) {
                let id = uuidv4()
                BlockRegistry.basicBlocks.set(id, block)
                BlockRegistry.labelIndex.set(block.label, id)
            }else{
                return Error(`Basic blocks must have a unique label ${block.label} is already in use`)
            }
        } else {
            return Error('BlockType was not set to BASIC, please use registerInstanceBlock for INSTANCE blocks')
        }
    }

    /**
     * Register an instance block.  This will register a block instance. This is to be used only for blocks that are 
     * @param block 
     * @returns 
     */
    public static registerInstanceBlock(block: Block): Error | void {
        if (block.type != BlockType.INSTANCE) {
            let id = uuidv4()
            let index = this.labelIndex.get(block.label)
            if(index == null){
                index = new Array<string>()
                BlockRegistry.labelIndex.set(block.label, index)
            }
            if(typeof(index) === "string"){
                return Error(`Label ${block.label} is registered to a blasic block please choose a different name`)
            }
            index.push(id)
            BlockRegistry.instanceBlocks.set(id, block)
        }else{
            return Error("BlockType was not set to INSTANCE, please use registerBasicBlock for BASIC blocks'")
        }
    }


}