import { PerspectiveCamera } from 'three';

function createCamera() {
  
  const camera = new PerspectiveCamera(
    75, 
    1, 
    0.1, 
    1000, 
  );

  camera.position.set(1, 2, 10);

  return camera;
}

export { createCamera }