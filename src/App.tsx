import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import './App.css';

import Gameboard from './components/Gameboard';

interface GameState {
  board: Array<string>,
  difficulty: number
  id: number,
  mines: number,
  state: string,
}

interface Action {
  type: string,
  payload: GameState
}

const initialState = {
  id: 0,
  board: [''],
  state: '',
  mines: 0,
  difficulty: 0
}

const gameReducer = (state:GameState, action: Action) => {
  console.log(action.payload)
  switch(action.type) {
    case 'NEW_GAME':
      return { ...state, id: action.payload.id, board: action.payload.board, mines: action.payload.mines, difficulty: action.payload.difficulty}
    case 'CHECK_BOARD':
      return {...state, board: action.payload.board}
    default: 
      return {...state}
  }
}

const App = () => {

  const [board, setBoard] = useState()
  const mineSweeperAPI = 'http://minesweeper-api.herokuapp.com/games';

  const [state, dispatch] = useReducer(gameReducer, initialState);
  console.log(state.board)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(`${mineSweeperAPI}?difficulty=0`)
      dispatch({type: 'NEW_GAME', payload:  result.data})
      setBoard(result.data.board)
    }
    fetchData()
  }, [])
 
  const cellCheck = (x:string, y:string) => {
    const fetchBoard = async () => {
      const result = await axios.post(
        `${mineSweeperAPI}/${state.id}/check?row=${y}&col=${x}`
      )
      setBoard(result.data.board)
      dispatch({ type: 'CHECK_BOARD', payload: result.data.board})
    }
    fetchBoard()
  }
  console.log(state.board)
  return (
    <div className="App">
      <h1>Minesweeper with typescript and hooks</h1>
      <h2>{state.id}</h2>
      <h2>{state.mines}</h2>
      <Gameboard board={board} state={state} cellCheck={cellCheck} />
    </div>
  );
}

export default App;
