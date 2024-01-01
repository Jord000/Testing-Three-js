

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Sphere2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('../assets/flubber3D.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(()=>{
    actions.KeyAction.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.Material}
          morphTargetDictionary={nodes.Sphere.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload('../assets/flubber3D.glb');