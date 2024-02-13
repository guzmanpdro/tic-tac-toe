import { WINNING_PATTERNS } from './constants'

export default function calculateWinner(squares) {
  for (let i = 0; i < WINNING_PATTERNS.length; i++) {
    const [a, b, c] = WINNING_PATTERNS[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) return squares[a];
  }

  return null
}