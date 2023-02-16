import React from 'react'
import Squera from './Squera'
import Piece from './Pieces/Piece'

export default function BoardSquera({piece, black}) {
  return (
    <div>
        <Squera>
          {piece && <Piece piece={piece}/>}
        </Squera>
    </div>
  )
}
