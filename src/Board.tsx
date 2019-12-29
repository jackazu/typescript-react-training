import { Table, TableBody, TableRow, TableHead } from '@material-ui/core';
import React from 'react';
import Square from './Square';

type BoardProps = {
  value?: string;
}

type BoardState = {
  squares: Array<string>;
}

class Board extends React.Component<BoardProps, BoardState> {
  state = {
    squares: Array(9).fill(''),
  };

  render() {
    return (
      <div>
        <Table>
          <TableHead>{this.props.value}</TableHead>
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
    squares[index] = 'X';
    this.setState({ squares: squares });
  }
}

export default Board;
