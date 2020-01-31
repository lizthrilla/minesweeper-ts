import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Gameboard from './components/Gameboard';

interface IGameData {
  id: number,
  board: [],
  state: string,
  mines: number,
  difficulty: number
}

const App = () => {

  const [gameData, setGameData] = useState<IGameData | null>()
  const [board, setBoard] = useState()
  const mineSweeperAPI:string = 'http://minesweeper-api.herokuapp.com/games';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(`${mineSweeperAPI}?difficulty=0`)
      setGameData(result.data)
      setBoard(result.data.board)
      
    }
    fetchData()
  }, [])
  console.log(gameData?.board)

  const cellCheck = (x:string, y:string) => {
    console.log(x, y)
    const fetchBoard = async () => {
      const result = await axios.post(
        `${mineSweeperAPI}/${gameData?.id}/check?row=${y}&col=${x}`
      )
      setBoard(result.data.board)
      console.log(result.data.board)
    }
    fetchBoard()
  }

  return (
    <div className="App">
      <h1>Minesweeper with typescript</h1>
      <h2>{gameData?.id}</h2>
      <h2>{gameData?.mines}</h2>
      <Gameboard board={board} cellCheck={cellCheck} />
    </div>
  );
}

export default App;
