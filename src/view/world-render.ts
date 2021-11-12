import { Engine, Scene, Vector3, FreeCamera, HemisphericLight } from 'babylonjs'
import { Chunk, CHUCK_SIZE as CHUNK_SIZE } from '../model/chunk';

export class WorldRender {
    public static Init(engine: Engine, canvas: HTMLCanvasElement): Scene {
        var scene = new Scene(engine);
        // This creates and positions a free camera (non-mesh)
        var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(canvas, true);
        var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;
        return scene;
    }

    public static renderChunk(chunk: Chunk, location: number[]){
        for(let x = 0; x < CHUNK_SIZE; x++){
            for(let y = 0; y < CHUNK_SIZE; y++){
                for(let z= 0; z < CHUNK_SIZE; z++){
                    
                }
            }
        }
    }
}