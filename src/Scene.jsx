import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const Scene = () => {
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
};

export default Scene;
