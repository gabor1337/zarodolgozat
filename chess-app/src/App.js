
import { useEffect, useState } from 'react';
import './App.css';
import BoardSquera from './components/BoardSquera';
import ChessBoard from './components/ChessBoard/ChessBoard';
import Pieces from './components/Pieces/Piece';
import Squera from './components/Squera';


function App() {
 
   return (
    <div id='app'>
     
     <ChessBoard/>
     <BoardSquera/>
   
    </div>
  );
}

export default App;
