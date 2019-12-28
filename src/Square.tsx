import React from 'react';
import { Button } from '@material-ui/core';

type SquareProps = {
  value: string;
};

type SquareState = {
  value: string;
}

class Square extends React.Component<SquareProps, SquareState>{
  constructor(props: Readonly<SquareProps>) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <Button
        variant='outlined'
        onClick={() => this.setState({ value: '○' })}
      >
        {this.state.value}
      </Button>
    );
  }
}

export default Square;