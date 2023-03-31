import React from 'react'
import logo from '../assets/images/3.png'

export function Head() {
  return (
    <div className='w-full h-16 bg-primary flex justify-start lg:hidden'>
      <div className='w-2/5 h-full'>
        <img className='w-full h-full' src={logo} alt={logo}/>
      </div>
    </div>
  )
}