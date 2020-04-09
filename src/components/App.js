import React, { useState, useEffect } from 'react';
// STAR MATCH - V9
import Game from "./Game";



const StarMatch = () => {
	const [gameId, setGameId] = useState(1);
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}



// Math science


	
export function App() {
  return (
    <StarMatch/>
  );
}
