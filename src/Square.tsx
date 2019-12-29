import React from 'react';
import { Button } from '@material-ui/core';

type SquareProps = {
  value: string;
  onClick: () => void;
};

const Square = (props: SquareProps) => {
  return (
    <Button
      variant='outlined'
      onClick={props.onClick}
    >
      {props.value}
    </Button>
  );
}

export default Square;
