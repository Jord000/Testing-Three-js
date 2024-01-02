import { Canvas } from '@react-three/fiber'
import Flubber from './Flubber'
import {
  Loader,
  Environment,
  MapControls,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
} from '@react-three/drei'
import { useEffect, useRef, useState, Suspense } from 'react'
import Plane from './Plane'
import FlubberMenu from './FlubberMenu'


const Scene = () => {
  const [isButtonMsg, setIsButtonMsg] = useState(true)
  const [isFlubberMenu, setIsFlubberMenu] = useState(false)
  const moveRef = useRef(null)
 

  const handleEsc = () => {
    setIsButtonMsg(!isButtonMsg)
  }

  useEffect(() => {
    document.addEventListener('pointerlockchange', handleEsc)
    return () => {
      document.removeEventListener('pointerlockchange', handleEsc)
    }
  })

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyR') {
        moveRef.current.reset()
      }
    })
  })

  return (
    <div className="canvas-box">
      <Canvas id="canvas">
        <ambientLight color={0x404040} intensity={30} />
        <directionalLight color={0xffffff} intensity={0.5} />
        <PerspectiveCamera fov={75} position={[-4, 0, 3]} makeDefault />
        <Environment files={'/netball_court_4k.hdr'} background />
        <Suspense fallback={null}>
          <Flubber
            isFlubberMenu={isFlubberMenu}
            setIsFlubberMenu={setIsFlubberMenu}
          />
        </Suspense>
        {/* <PointerLockControls selector="#move-around" /> */}
        <OrbitControls ref={moveRef} />
        <Plane />
      </Canvas>
      <Loader/>
      {isFlubberMenu && (
        <FlubberMenu
          isFlubberMenu={isFlubberMenu}
          setIsFlubberMenu={setIsFlubberMenu}
        />
      )}
      <div className="start-flubber">
        <button id="move-around">
          {/* {isButtonMsg ? 'click to control' : 'Press Esc To Exit Controls'} */}
       <span className='buttonTextSmallScreen'>try drag or pan with touchscreen controls</span>
       <span className='buttonTextLargeScreen'>Left click to orbit - right click to pan - middle mouse to zoom</span>
        </button>
      </div>
    </div>
  )
}

export default Scene
