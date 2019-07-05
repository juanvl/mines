import React from 'react';

import Flag from '~components/Flag';
import {
  Container,
  FlagContainer,
  FlagButton,
  FlagsLeft,
  NewGameButton,
  NewGameButtonText,
} from './styles';

const Header = props => (
  <Container>
    <FlagContainer>
      <FlagButton onPress={props.onFlagPress}>
        <Flag bigger />
      </FlagButton>
      <FlagsLeft>{props.flagsLeft}</FlagsLeft>
    </FlagContainer>
    <NewGameButton onPress={props.onNewGame}>
      <NewGameButtonText>Novo Jogo</NewGameButtonText>
    </NewGameButton>
  </Container>
);

export default Header;
