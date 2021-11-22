import { useState } from "react";
import Square from "./components/Square";
import ResetButton from "./components/ResetButton";
import calculateWinner from "./utils/calculateWinner";

const EmptyBoard = Array(9).fill(null);

function TicTacToe() {
  const [displayMove, setDisplayMove] = useState(0);
  const [history, setHistory] = useState([EmptyBoard]);
  const [nextPlayer, setNextPlayer] = useState("X");

  const handleClick = (index) => {
    const currentSquares = history[displayMove];
    const newSquares = [...currentSquares];
    newSquares[index] = nextPlayer;
    setHistory([...history, newSquares]);
    setNextPlayer(nextPlayer === "X" ? "O" : "X");
    setDisplayMove(displayMove + 1);
  };

  const showPreviousMove = () => {
    const previousMove = displayMove - 1;
    setDisplayMove(previousMove < 0 ? 0 : previousMove);
  };
  const showNextMove = () => {
    const nextMove = displayMove + 1;
    if (displayMove < history.length - 1) setDisplayMove(nextMove);
  };

  const reset = () => setHistory([EmptyBoard]);

  const currentSquares = history[displayMove];
  const winner = calculateWinner(currentSquares);
  const fullBoard = !currentSquares.includes(null);
  const isTravelling = displayMove < history.length - 1;

  return (
    <div className="w-full flex items-center justify-center">
      <div className="border rounded-xl mt-20">
        <h1 className="text-xxl font-bold p-2 pb-0">Jogo da Velha</h1>
        <h3 className="text-sm font-semibold p-1">Jogador: {nextPlayer}</h3>
        <div>{(winner || fullBoard) && <ResetButton onClick={reset} />}</div>
        <div className="border rounded w-56 grid grid-cols-3">
          {currentSquares.map((value, index) => (
            <Square
              key={index}
              value={value}
              index={index}
              onClick={handleClick}
              disabled={isTravelling}
            />
          ))}
        </div>
        {winner && <h1 className="text-xl font-bold p-2 text-green-500">Vencedor: {winner}</h1>}
        {!winner && fullBoard && <h1 className="text-xl font-bold p-2 text-gray-500">EMPATE</h1>}
        <div className="flex justify-around">
          <button className="border rounded px-2" onClick={showPreviousMove}>
            {"<"}
          </button>
          <span>
            move: {displayMove}/{history.length - 1}
          </span>
          <button className="border rounded px-2" onClick={showNextMove}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
