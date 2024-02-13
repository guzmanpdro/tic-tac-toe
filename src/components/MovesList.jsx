export default function MovesList({ moves, onJumpTo }) {

  return moves.map((squares, move) => {
    const handleOnJumpTo = () => onJumpTo(move)

    const description = move > 0
      ? `Ir al movimiento # ${move}`
      : 'Ir al inicio del juego'

    return (
      <li key={move}>
        <button onClick={handleOnJumpTo}>{description}</button>
      </li>
    )
  })
}