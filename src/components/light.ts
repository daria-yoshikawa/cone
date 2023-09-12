import { DirectionalLight } from 'three';

function createLights() {
    
  const light = new DirectionalLight('white', 3);

  light.position.set(0, 0, 10);

  return light;
}

export { createLights };