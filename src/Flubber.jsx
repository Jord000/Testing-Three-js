import React, {Suspense } from 'react'
import Sphere2 from './Flubber3D'

const Flubber = (props) => {
  const { isFlubberMenu, setIsFlubberMenu } = props

  const flubberMenu = (e) => {
    setIsFlubberMenu(!isFlubberMenu)
  }

  return (
    <Suspense fallback={null}>
      <Sphere2 onClick={flubberMenu} />
    </Suspense>
  )
}

export default Flubber
