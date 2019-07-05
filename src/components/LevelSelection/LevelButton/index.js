import React from 'react';

import { Container, Title } from './styles';

const LevelButton = props => (
  <Container onPress={props.onPress} bgColor={props.bgColor}>
    <Title>{props.btnText}</Title>
  </Container>
);

export default LevelButton;
