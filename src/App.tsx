import React, { useEffect } from 'react';
import './App.css';

import Gameboard from './components/Gameboard';

const App = () => {

  const mineSweeperAPI:string = 'http://minesweeper-api.herokuapp.com/games';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios
  //   }
  // })

  return (
    <div className="App">
      <h1>Minesweeper with typescript</h1>
      <Gameboard />
    </div>
  );
}

export default App;
