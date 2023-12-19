import { Canvas } from '@react-three/fiber'
import Flubber from './Flubber';
import { PerspectiveCamera } from '@react-three/drei';

const Scene = () => {

  return (
    <Canvas >
      <ambientLight />
      <directionalLight color={0xffffff} intensity={0.5} />
      <PerspectiveCamera fov={75} position={[0, 0, 3]} makeDefault />
      <Flubber />
    </Canvas>
  )
}

export default Scene;
