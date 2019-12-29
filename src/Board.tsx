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
              <Square value={this.state.value[0]} />
              <Square value={this.state.value[1]} />
              <Square value={this.state.value[2]} />
            </TableRow>
            <TableRow>
              <Square value={this.state.value[3]} />
              <Square value={this.state.value[4]} />
              <Square value={this.state.value[5]} />
            </TableRow>
            <TableRow>
              <Square value={this.state.value[6]} />
              <Square value={this.state.value[7]} />
              <Square value={this.state.value[8]} />
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Board;
