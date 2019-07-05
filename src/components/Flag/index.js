import React from 'react';

import {
  Container, FlagPole, FlagBanner, Base1, Base2,
} from './styles';

const Flag = props => (
  <Container bigger={props.bigger}>
    <FlagPole bigger={props.bigger} />
    <FlagBanner bigger={props.bigger} />
    <Base1 bigger={props.bigger} />
    <Base2 bigger={props.bigger} />
  </Container>
);

export default Flag;
