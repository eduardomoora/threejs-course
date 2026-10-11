import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
scene.add(cubeMesh)

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  200)
camera.position.z = 5

// initialize the renderer
const canvas = document.querySelector('canvas.threejs');
const controls = new OrbitControls(camera, canvas)

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

const loop = ()=>{
  controls.update();
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)

}
loop();
