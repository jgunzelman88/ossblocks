import { Block, BlockType } from '../model/block'
import { v4 as uuidv4 } from 'uuid'
import { Bedrock } from './standard-blocks'

/**
 * Registry for all block types both instance and basic.
 */
export class BlockRegistry {
    private  basicBlocks: Map<string, Block> = new Map<string, Block>()
    private  labelIndex: Map<string, string | string[]> = new Map<string, string | string[]>()
    private  instanceBlocks: Map<string, Block> = new Map<string, Block>()

    public constructor(){
        const bedrock = new Bedrock()
        this.registerBasicBlock(bedrock)
    }

    public getBlockByID(id: string): Block | undefined{
        let blockId = this.basicBlocks.get(id)
        if(blockId == null){
            blockId = this.instanceBlocks.get(id)
        }
        return blockId;
    }

    public getBlockByLabel(label: string): string | string[] | undefined{
        return this.labelIndex.get(label);
    }

    /**
     * Register a basic block to the registry
     * @param block 
     * @returns returns an error if the BlockType is wrong or if there is already a block sregistered with the same label
     */
    public registerBasicBlock(block: Block): Error | void {
        if (block.type === BlockType.BASIC) {
            if (this.labelIndex.has(block.label)) {
                return Error(`Basic blocks must have a unique label ${block.label} is already in use`)
            }else if(this.basicBlocks.has(block.id)){
                return Error(`Basic blocks must have a Id ${block.id} is already in use. Block ids 0-1024 are reservered. It is recommended you use a guid for your id`)
            }else{
                this.basicBlocks.set(block.id, block)
                this.labelIndex.set(block.label, block.id)
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
    public registerInstanceBlock(block: Block): Error | void {
        if (block.type !== BlockType.INSTANCE) {
            let id = uuidv4()
            let index = this.labelIndex.get(block.label)
            if(index == null){
                index = new Array<string>()
                this.labelIndex.set(block.label, index)
            }
            if(typeof(index) === "string"){
                return Error(`Label ${block.label} is registered to a blasic block please choose a different name`)
            }
            index.push(id)
            this.instanceBlocks.set(id, block)
        }else{
            return Error("BlockType was not set to INSTANCE, please use registerBasicBlock for BASIC blocks'")
        }
    }
}

export const BLOCK_REGISTRY = new BlockRegistry()