

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Sphere2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/flubber3D-v2.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(()=>{
    actions.KeyAction.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Sphere_1"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_1.geometry}
          material={materials.Material}
          morphTargetDictionary={nodes.Sphere_1.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere_1.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/flubber3D-v2.glb');