import React from 'react'

import { move } from './Game'
import Square from './Squera'
const promotionPieces = ['r', 'n', 'b', 'q']

export default function Promote({
  promotion: { from, to, color },
}) {
  return (
    <div className="board">
      {promotionPieces.map((p, i) => (
        <div key={i} className="promote-square">
          <Square black={i % 3 === 0}>
            <div
              className="piece-container"
              onClick={() => move(from, to, p)}
            >
              <img
                src={require(`./img/${p}_${color}.png`)}
                alt=""
                className="piece cursor-pointer"
              />
            </div>
          </Square>
        </div>
      ))}
    </div>
  )
}
