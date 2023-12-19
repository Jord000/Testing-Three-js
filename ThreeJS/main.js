import './index.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

//project setup
const container = document.getElementById('bg');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth, container.clientHeight);
camera.position.setZ(3);
renderer.render(scene, camera);


//controls
let controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = true;
controls.screenSpacePanning = true;
controls.enablePan = true
controls.maxDistance = 6
controls.enableDamping = true
controls.dampingFactor = 0.1

controls.listenToKeyEvents(window);
controls.keyPanSpeed = 20

window.addEventListener('keydown', (event) => {
  if (event.code === 'KeyR') {
    controls.reset()
  }
})
controls.minAzimuthAngle = Math.PI / 4
controls.maxAzimuthAngle = Math.PI
controls.minPolarAngle = Math.PI / 4
controls.maxPolarAngle = Math.PI / 2

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
let flubber

const loader = new GLTFLoader();
loader.load(
  '../assets/test3Dfile.glb',
  function (gltf) {
    flubber = gltf.scene
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


function animate() {
  requestAnimationFrame(animate);
  controls.update()
  renderer.render(scene, camera)


  if (flubber) {
    flubber.rotation.x += 0.01
    flubber.rotation.y += 0.01
    flubber.rotation.z += 0.01
  }



}
if (WebGL.isWebGLAvailable()) {
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}


// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
