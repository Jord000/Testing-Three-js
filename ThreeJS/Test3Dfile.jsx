/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ../assets/test3Dfile.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../assets/test3Dfile.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('../assets/test3Dfile.glb')