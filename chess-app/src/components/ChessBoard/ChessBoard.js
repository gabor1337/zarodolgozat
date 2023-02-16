import React from 'react';
import "./ChessBoard.css";
import Piece from '../Pieces/Piece';
import BoardSquera from '../BoardSquera';
import Squera from '../Squera';
import Board from '../Board';

const HorizontalAxis = ["a","b","c","d","e","f","g","h"]
const VerticalAxis = ["1","2","3","4","5","6","7","8"]

export default function ChessBoard({piece, black}){

    let board = [];

    for(let j = VerticalAxis.length-1; j>=0; j--){
        for(let i = 0; i<HorizontalAxis.length; i++){
            const number = j + i + 2;

            if(number % 2 == 0){
                board.push(
                    
                    <div className='tile black-tile' black={black}>
                        {piece && <Piece piece={piece}/>}
                        <BoardSquera/>
                        
                    </div>
                )
            }   
            else{
                board.push(
                    <div className='tile white-tile' black={black}>
                         {piece && <Piece piece={piece}/>}
                         <BoardSquera/>
                    </div>
                )
            }
        }
    }

    return <div id='chessboard'>{board}</div>
    }
 