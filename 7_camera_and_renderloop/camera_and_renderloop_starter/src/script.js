import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// initialize the scene
const scene = new THREE.Scene()

const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: 'red'})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
);

scene.add(cubeMesh)

const aspectRatio = window.innerWidth / window.innerHeight;

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  25, 
  aspectRatio,
  0.1,
  200
);

// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   200
// );

camera.position.z = 5



// initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

// initiate the controls
const controls = new OrbitControls( camera, canvas );

controls.enableDamping = true
controls.autoRotate = true

window.addEventListener(`resize`, () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
})

const renderLoop = () => {
  window.requestAnimationFrame(renderLoop);
  renderer.render(scene, camera);
  controls.update()
};

renderLoop()

document.getElementById('updateButton').addEventListener('click', updateVariable);