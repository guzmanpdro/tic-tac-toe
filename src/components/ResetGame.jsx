import confetti from 'canvas-confetti'

import calculateWinner from "../utils/calculateWinner";

export default function ResetGame({ squares, onClick }) {
  const winner = calculateWinner(squares)
  const tie = squares.every(elem => elem) && winner === null
  if (winner) confetti({ origin: { y: 0.85 } })

  return winner || tie ? <button className="reset-game" onClick={onClick}>🔄 Play again</button> : null
}