import { useState } from "react";
import Square from "./components/Square";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState("X");

  const handleClick = (index) => {
    const newSquares = [...squares];
    newSquares[index] = nextPlayer;
    setSquares(newSquares);
    setNextPlayer(nextPlayer == "X" ? "O" : "X");
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="border rounded-xl mt-20">
        <h1 className="text-xxl font-bold p-2">Jogo da Velha. Jogador: {nextPlayer}</h1>
        <div className="border rounded w-56 grid grid-cols-3">
          {squares.map((value, index) => (
            <Square value={value} index={index} onClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
