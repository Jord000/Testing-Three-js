import React, { useEffect, useRef , useLayoutEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

const Flubber = (props) => {
  const group = useRef()
  const { isFlubberMenu, setIsFlubberMenu } = props
  const flubberRef = useRef(null)

  const { nodes, materials, animations } = useGLTF(
    '../assets/test3Dfile v2.0.glb'
  )
  const { actions, names } = useAnimations(animations, group)

  useFrame(() => {
    if (!flubberRef.current) {
      return
    }
    flubberRef.current.rotation.x += 0.01
    flubberRef.current.rotation.y += 0.01
    flubberRef.current.rotation.z += 0.01
  })

  const flubberMenu = (e) => {
    setIsFlubberMenu(!isFlubberMenu)
  }


  useLayoutEffect(() => {
    console.log(actions)
    names.forEach((animation) => {
      actions?.[animation]?.play();
    });
  }, [actions, names]);





  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        onClick={flubberMenu}
        ref={flubberRef}
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.Material}
      ></mesh>
    </group>
  )
}

export default Flubber
