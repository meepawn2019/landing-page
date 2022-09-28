/* eslint-disable react/no-unknown-property */
/* eslint-disable import/no-namespace */
import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // state for geometry size
  const [size, setSize] = useState([Math.random() * 0.1, Math.random() * 0.1, 0])
  
  useFrame((state, delta) => {
    // move the box up, if it's pass the top of the screen, place it back at the bottom of the screen
    ref.current.position.y += 0.01
    if (ref.current.position.y > 5) {
      ref.current.position.y = -5
    }
    // ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 3
  })
  // useEffect(() => {
  //   ref.current.rotation.x = 0.25
  //   ref.current.rotation.y = 0
  //   ref.current.rotation.z = 0
  // }, [])
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={size}  />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'white'} />
    </mesh>
  )
}

export default Box;