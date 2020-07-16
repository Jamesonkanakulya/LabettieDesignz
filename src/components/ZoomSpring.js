import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(100000rem) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card(props) {
  const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: prop.xys.interpolate(trans) }}
  
    >
        {props.children}
       

    </animated.div>
  )
}

export default Card


