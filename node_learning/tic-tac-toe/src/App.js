import {useState} from 'react';
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
    if (calculateWinner(nextSquares)) {
      alert(`Winner: ${nextSquares[i]}`);
      setSquares(Array(9).fill(null));
    }
  }
  return <>
    <div className="board-row">
    <Square value={squares[0]} onClickFunction={()=>handleClick(0)}/>
    <Square value={squares[1]} onClickFunction={()=>handleClick(1)}/>
    <Square value={squares[2]} onClickFunction={()=>handleClick(2)}/>
    </div>
    <div className="board-row">
    <Square value={squares[3]} onClickFunction={()=>handleClick(3)}/>
    <Square value={squares[4]} onClickFunction={()=>handleClick(4)}/>
    <Square value={squares[5]} onClickFunction={()=>handleClick(5)}/>
    </div>
    <div className="board-row">
    <Square value={squares[6]} onClickFunction={()=>handleClick(6)}/>
    <Square value={squares[7]} onClickFunction={()=>handleClick(7)}/>
    <Square value={squares[8]} onClickFunction={()=>handleClick(8)}/>
    </div>
  </>;
}
function Square({value, onClickFunction}){
  return <button className="square" onClick={onClickFunction}>{value}</button>;
}
