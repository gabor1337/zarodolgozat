import React from 'react'

export default function Pieces({piece: {type, color}}) {
 
    const PieceImg = require(`../img/${type}_${color}.png`) 

    return (
    <div>
        <img src={PieceImg} alt="" />
    </div>
  )
}
