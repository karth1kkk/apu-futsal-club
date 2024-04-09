import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export function Model(props) {
  const { nodes, materials } = useGLTF('/adidas_teamgeist_ball_germany_2006_match_ball.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Ball_Triangles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Ball_Ovals}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Ball_Ovals}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/adidas_teamgeist_ball_germany_2006_match_ball.glb')
