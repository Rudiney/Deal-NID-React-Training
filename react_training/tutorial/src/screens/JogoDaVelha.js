import { useState, useContext } from "react";
import Square from "../components/Square";
import ScreenHeader from "../components/ScreenHeader";

import calculateWinner from "../utils/calculateWinner";

function JogoDaVelha() {
  const [displayMove, setDisplayMove] = useState(0);
  const [history, setHistory] = useState([[null, null, null, null, null, null, null, null, null]]);

  const reset = () => {
    setDisplayMove(0);
    setHistory([[null, null, null, null, null, null, null, null, null]]);
  };

  const handleClick = (index) => {
    const currentSquares = history[history.length - 1];
    const newSquares = [...currentSquares];
    newSquares[index] = nextPlayer;
    setHistory([...history, newSquares]);
    setDisplayMove(displayMove + 1);
  };

  const showPreviousMove = () => {
    if (displayMove > 0) {
      setDisplayMove(displayMove - 1);
    }
  };

  const showNextMove = () => {
    if (displayMove + 1 < history.length) {
      setDisplayMove(displayMove + 1);
    }
  };

  const nextPlayer = displayMove % 2 === 0 ? "X" : "O";
  const squares = history[displayMove];
  const winner = calculateWinner(squares);
  const fullBoard = !squares.includes(null);
  const deuVelha = fullBoard && !winner;
  const isPast = displayMove < history.length - 1;

  return (
    <>
      <ScreenHeader>Jogo da Velha</ScreenHeader>

      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="w-full flex items-center justify-center">
          <div className="border border-blue-500 rounded-xl mt-20">
            <h1 className="text-xxl font-bold p-2">Jogo da Velha</h1>
            <h1 className="text-xxl font-bold p-2">Proximo a jogar: {nextPlayer}</h1>

            {nextPlayer == "X" ? (
              <h1 className="text-xxl font-bold p-2">XISSS</h1>
            ) : (
              <h1 className="text-xxl font-bold p-2">Bolinha</h1>
            )}

            {winner && <h1 className="text-xxl font-bold p-2">Vencedor é: {winner}</h1>}
            {deuVelha && <h2 className="font-bold p-2 text-red-500 bg-red-100">DEU VELHAA</h2>}

            {(winner || deuVelha) && (
              <button onClick={reset} className="px-2 border rounded">
                RESET
              </button>
            )}
            <div className="border rounded w-56 grid grid-cols-3">
              {squares.map((value, index) => {
                return (
                  <Square
                    key={index}
                    value={value}
                    onClick={() => handleClick(index)}
                    disabled={winner || isPast}
                  />
                );
              })}
            </div>
            <div className="flex justify-around">
              <button className="border rounded px-2" onClick={showPreviousMove}>
                {"<"}
              </button>
              <span>
                move {displayMove} de {history.length - 1}
              </span>
              <button className="border rounded px-2" onClick={showNextMove}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JogoDaVelha;
