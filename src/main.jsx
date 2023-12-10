import './index.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js'

//project setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(3);
renderer.render(scene, camera);

//lights
const ambientlight = new THREE.AmbientLight(0x404040, 30);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);
scene.add(ambientlight);

//hdri
new RGBELoader()
  .load('../assets/netball_court_4k.hdr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
  });

// import blender file
const loader = new GLTFLoader();
loader.load(
  '../assets/test3Dfile.glb',
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//plane
const geometry = new THREE.CircleGeometry(5, 32);
const material = new THREE.MeshBasicMaterial({ color: 101530, side: THREE.DoubleSide });
const circplane = new THREE.Mesh(geometry, material);
circplane.rotateX(1.5708)
circplane.position.setY(-9);
scene.add(circplane);

//controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = true;
// const fly = new FlyControls(camera, renderer.domElement)
// // fly.movementSpeed = 1
// // fly.autoForward = false






function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
  controls.update();
  // fly.update(0.05)


}
if (WebGL.isWebGLAvailable()) {
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}


// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
