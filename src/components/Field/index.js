import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import params from '~params';

import Mine from '~components/Mine';
import Flag from '~components/Flag';

import { FieldContainer, FieldText } from './styles';

const Field = (props) => {
  const {
    mined, nearMines, opened, exploded, flagged,
  } = props;

  let textColor = null;
  if (nearMines > 0) {
    if (nearMines === 1) textColor = 'blue';
    if (nearMines === 2) textColor = 'green';
    if (nearMines > 2 && nearMines < 6) textColor = 'red';
    if (nearMines >= 6) textColor = 'black';
  }

  return (
    <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onFlag}>
      <FieldContainer {...props} blockSize={params.blockSize} borderSize={params.borderSize}>
        {!mined && opened && nearMines > 0 && (
          <FieldText textColor={textColor} fontSize={params.fontSize}>
            {nearMines}
          </FieldText>
        )}
        {mined && opened && <Mine />}
        {flagged && !opened && <Flag />}
      </FieldContainer>
    </TouchableWithoutFeedback>
  );
};

export default Field;
