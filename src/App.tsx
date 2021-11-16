import React, { Component } from 'react';
import { Vector3, HemisphericLight, UniversalCamera, Scene } from "babylonjs";
import { WorldRender } from './view/world-render';
import { BabylonScene, SceneEventArgs } from './view/babylon-scene';
import { createChunk } from './instance/chunk-creator'
import { World } from './model/world';
import { CHUNK_SIZE } from './model/chunk';

export class App extends Component<{}, {}> {
    onSceneMount = (e: SceneEventArgs) => {
        const { canvas, scene, engine } = e;
        // This creates and positions a free camera (non-mesh)
        this.setUpScene(scene)
        this.setUpCamera(scene, canvas)
        let worldI = new World()
        worldI.chunks.push(createChunk('', 0, 0, 0))
        worldI.chunks.push(createChunk('', -CHUNK_SIZE, 0, 0))
        worldI.chunks.push(createChunk('', 0, 0, -CHUNK_SIZE))
        worldI.chunks.push(createChunk('', -CHUNK_SIZE, 0, -CHUNK_SIZE))
        let world = new WorldRender(scene)
        world.renderWorld(worldI)

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });
    }

    setUpCamera(scene: Scene, canvas: any) {
        var camera = new UniversalCamera("camera1", new Vector3(0, 5, -10), scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(canvas, true);
        camera.applyGravity = true
        camera.checkCollisions = true;

    }

    setUpScene(scene: Scene) {
        const assumedFramesPerSecond = 60;
        const earthGravity = -9.81;
        scene.gravity = new Vector3(0, earthGravity / assumedFramesPerSecond, 0);
        var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
        light.intensity = 1;
        scene.gravity = new Vector3(0, -0.15, 0);
        scene.collisionsEnabled = true;
    }

    render() {
        return (
            <div>
                <BabylonScene onSceneMount={this.onSceneMount} />
            </div>
        )
    }
}