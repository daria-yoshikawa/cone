import * as THREE from 'three';

function createCone(vertices: Float32Array) {

  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
  const material = new THREE.MeshStandardMaterial( { color: 'skyblue' } );

  geometry.computeVertexNormals()
  const cone = new THREE.Mesh(geometry, material );

  cone.rotation.set(-1, 0.4, 0);
  return cone;
}

export { createCone };