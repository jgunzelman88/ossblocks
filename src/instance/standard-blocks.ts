import { Block, BlockType } from "../model/block";
import { MeshBuilder, Scene, StandardMaterial, Texture } from "babylonjs"

export class Bedrock extends Block {
    private mat? : StandardMaterial

    constructor(){
        super("0", BlockType.BASIC, "bedrock")
    }

    public render(scene: Scene, x: number, y: number, z: number){
        let mesh = MeshBuilder.CreateBox(`bedrock`,{size:1},scene)
        mesh.position.x = x
        mesh.position.y = y
        mesh.position.z = z
        if(this.mat == null){
            this.mat = new StandardMaterial('br-mat', scene)
            this.mat.diffuseTexture = new Texture('textures/bedrock.png', scene)
        }
        mesh.material = this.mat
        mesh.checkCollisions = true;
    }

}