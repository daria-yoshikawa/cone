import { createCamera } from '@/components/camera';
import { createCone } from '@/components/cone';
import { createLights } from '@/components/light';
import { createScene } from '@/components/scene';
import { createRenderer } from '@/systems/renderer';
import { Resizer } from '@/systems/Resizer';
import type { DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer} from 'three';


class World {
    private camera:PerspectiveCamera;
    private renderer:WebGLRenderer;
    private scene:Scene;
    private light:DirectionalLight;

    constructor(container: Element) {
        this.camera = createCamera();
        this.scene = createScene();
        this.renderer = createRenderer();
        this.light = createLights();

        container.appendChild(this.renderer.domElement);
        this.scene.add(this.light);

        const resizer = new Resizer(container, this.camera, this.renderer);
    }
    
    render() {
        this.renderer.render(this.scene, this.camera);
    }

    createCone(vertices: Float32Array) {
        const cone = createCone(new Float32Array(vertices))
        
        this.scene.clear();
        this.scene.add(cone,this.light);

        this.renderer.render(this.scene, this.camera);
    }
}
    
export { World }