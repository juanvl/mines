import React from 'react';

import { Container, Core, Line } from './styles';

const Mine = () => (
  <Container>
    <Core />
    <Line />
    <Line style={{ transform: [{ rotate: '45deg' }] }} />
    <Line style={{ transform: [{ rotate: '90deg' }] }} />
    <Line style={{ transform: [{ rotate: '135deg' }] }} />
  </Container>
);

export default Mine;
