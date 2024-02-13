import calculateWinner from "../utils/calculateWinner"

export default function GameStatus({ squares, xIsNext }) {
  const winner = calculateWinner(squares)
  const player = xIsNext ? 'X' : 'O'
  const status = winner ? `Win ${winner}` : `Play ${player}`
  const tie = squares.every(elem => elem) && winner === null
  const statusIcon = winner ? '🏆' : '🕑'
  const statusText = tie ? 'Tie XO!' : status

  return (
    <>
      <p className="status-icon">{statusIcon}</p>
      <div className="status-info">
        <p className="status-title">STATUS</p>
        <p>{statusText}</p>
      </div>
    </>
  )
}