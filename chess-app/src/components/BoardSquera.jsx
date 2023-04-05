import React, { useEffect, useState } from 'react'

import { useDrop } from 'react-dnd'
import { gameSubject, handleMove } from './Game'
import Piece from './Pieces/Piece'
import Promote from './Promote'

import Square from './Squera'
export default function BoardSquera({
  piece,
  black,
  position,
}) {
  const [promotion, setPromotion] = useState(null)
  const [, drop] = useDrop({
    accept: 'piece',
    drop: (item) => {
      const [fromPosition] = item.item?.split('_')
      console.log(fromPosition)
      console.log(position)
      handleMove(fromPosition, position)
    },
  })
  useEffect(() => {
    const subscribe = gameSubject.subscribe(
      ({ pendingPromotion }) =>
        pendingPromotion && pendingPromotion.to === position
          ? setPromotion(pendingPromotion)
          : setPromotion(null)
    )
    return () => subscribe.unsubscribe()
  }, [position])
  return (
    <div className="board-square" ref={drop}>
          <Square black={black}>
        {promotion ? (
          <Promote promotion={promotion} />
        ) : piece ? (
          <Piece piece={piece} position={position} />
        ) : null}
      </Square>
    </div>
  )
}
