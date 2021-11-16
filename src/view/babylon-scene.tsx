import { Engine, Scene, EngineOptions } from 'babylonjs';
import { Component } from 'react'

export type SceneEventArgs = {
    engine: Engine,
    scene: Scene,
    canvas: HTMLCanvasElement
};

export type SceneProps = {
    engineOptions?: EngineOptions,
    adaptToDeviceRatio?: boolean,
    onSceneMount?: (args: SceneEventArgs) => void,
    width?: number,
    height?: number
};

export class BabylonScene extends Component<SceneProps & React.HTMLAttributes<HTMLCanvasElement>, {}> {

    private scene?: Scene;
    private engine?: Engine;
    private canvas?: HTMLCanvasElement;

    onResizeWindow() {
        if (this.engine) {
            this.engine.resize();
        }
    }

    componentDidMount() {
        if (this.canvas != null) {
            this.engine = new Engine(
                this.canvas,
                true,
                this.props.engineOptions,
                this.props.adaptToDeviceRatio
            );
        }
        if (this.engine != null) {
            this.scene = new Scene(this.engine);
        }

        if (typeof this.props.onSceneMount === 'function' &&
            this.scene != null && this.engine != null && this.canvas != null) {
            this.props.onSceneMount({
                scene: this.scene,
                engine: this.engine,
                canvas: this.canvas
            });
        } else {
            console.error('onSceneMount function not available');
        }

        // Resize the babylon engine when the window is resized
        window.addEventListener('resize', this.onResizeWindow);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResizeWindow);
    }

    onCanvasLoaded = (c: HTMLCanvasElement) => {
        if (c !== null) {
            this.canvas = c;
        }
    }

    render() {
        // 'rest' can contain additional properties that you can flow through to canvas:
        // (id, className, etc.)
        let { width, height, ...rest } = this.props;

        let opts: any = {};

        opts.width = window.innerWidth
        opts.height = window.innerHeight
        return (<canvas {...opts} ref={this.onCanvasLoaded} />)
    }
}