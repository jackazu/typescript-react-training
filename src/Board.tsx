import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import Square from './Square';

type BoardProps = {
  value?: string;
}

type BoardState = {
  squares: Array<string>;
  xIsNext: boolean;
}

class Board extends React.Component<BoardProps, BoardState> {
  state = {
    squares: Array(9).fill(''),
    xIsNext: false,
  };

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    status = winner
      ? 'Winner: ' + winner
      : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <Table className='margin: auto'>
          <TableHead>{status}</TableHead>
          <TableBody>
            <TableRow>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </TableRow>
            <TableRow>
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </TableRow>
            <TableRow>
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }

  renderSquare = (index: number) => {
    return (
      <Square
        value={this.state.squares[index]}
        onClick={() => this.handleClick(index)}
      />
    );
  }

  handleClick = (index: number) => {
    const squares = this.state.squares.slice();
    if (squares[index]) {
      return;
    }
    squares[index] = this.state.xIsNext ? 'X' : '◯';
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }
}

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
