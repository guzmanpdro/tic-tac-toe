import { useState } from "react"

import Board from "./components/Board"
import GameStatus from "./components/GameStatus"
import ResetGame from "./components/ResetGame"
// import MovesList from "./components/MovesList"

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)

  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  // function handleJumpTo(nextMove) {
  //   setCurrentMove(nextMove)
  // }

  function handleReset() {
    setHistory([Array(9).fill(null)])
    setCurrentMove(0)
  }

  return (
    <>
      <main className="game">
        <section className="game-status">
          <GameStatus squares={currentSquares} xIsNext={xIsNext} />
        </section>
        <section className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </section>
        <ResetGame squares={currentSquares} onClick={handleReset} />

        {/* Display a list of movements
          <div className="game-info">
            <ol>
              <MovesList moves={history} onJumpTo={handleJumpTo} />
            </ol>
          </div> 
        */}
      </main>
    </>
  )
}