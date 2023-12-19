import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

const Flubber = (props) => {
    const flubberRef = useRef(null)

    useFrame(() => {
        if (!flubberRef.current) {
            return;
        }
        flubberRef.current.rotation.x += 0.01
        flubberRef.current.rotation.y += 0.01
        flubberRef.current.rotation.z += 0.01
    })


    const { nodes, materials } = useGLTF("../assets/test3Dfile.glb");

    return (
        <group {...props} dispose={null} >
            <mesh
                ref={flubberRef}
                castShadow
                receiveShadow
                geometry={nodes.Sphere.geometry}
                material={materials.Material}
            ></mesh>
        </group>
    );
}


export default Flubber