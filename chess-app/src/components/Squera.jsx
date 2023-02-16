import React from 'react'

export default function Squera({children, black}) {
  
    const bgClass = black ? 'baclk-tile' : 'white-tile'
  
    return (
    <div className='bgClass'>
         {children}
    </div>
  )
}
