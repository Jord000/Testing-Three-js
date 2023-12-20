import { DoubleSide } from "three";

const Plane = () => {
    return <mesh position={[0, -9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[5, 32]} />
        <meshBasicMaterial color={101530} side={DoubleSide} />
    </mesh>
}

export default Plane

