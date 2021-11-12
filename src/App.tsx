import React, { Component } from 'react';
import { Engine, Scene } from "babylonjs";
import { WorldRender } from './view/world-render';

export default class App extends Component {
  
  componentDidMount() {
    //Engine
    const canvas: HTMLElement | null = document.getElementById("renderCanvas")
    if (canvas != null && canvas instanceof HTMLCanvasElement) {
      // Get the canvas element
      const engine = new Engine(canvas, true); // Generate the BABYLON 3D engine
      var scene: Scene = WorldRender.Init(engine, canvas)
      // Register a render loop to repeatedly render the scene
      engine.runRenderLoop(function () {
        scene.render();
      });
      // Watch for browser/canvas resize events
      window.addEventListener("resize", function () {
        engine.resize();
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div>Hello</div>
      </div>
    );
  }
}
