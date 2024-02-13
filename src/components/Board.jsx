import Square from '../components/Square'

import calculateWinner from '../utils/calculateWinner'

export default function Board({ xIsNext, squares, onPlay }) {
  const nextPlayer = xIsNext ? 'X' : 'O'
  const winner = calculateWinner(squares)

  function handleClick(i) {
    if (squares[i] || winner) return

    const nextSquares = squares.slice()
    nextSquares[i] = nextPlayer

    onPlay(nextSquares)
  }

  return (
    <>
      {
        squares.map((square, index) => {
          return (
            <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
          )
        })
      }
    </>
  )
}
