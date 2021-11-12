export const CHUCK_SIZE = 32
export class Chunk{
    
    public id: number
    public blocks?: number[][][];
    public location: number[];

    constructor(id: number, location: number[]){
        this.id = id
        this.location = location
    }
}