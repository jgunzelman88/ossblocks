import { Chunk } from "./chunk";

export class World{
    public id?: string
    public chunks: Array<Chunk> = new Array();
}