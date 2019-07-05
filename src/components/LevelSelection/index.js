import React from 'react';
import { Modal } from 'react-native';
import LevelButton from './LevelButton';
import { Container, Frame, Title } from './styles';

const LevelSelection = props => (
  <Modal
    onRequestClose={props.onCancel}
    visible={props.isVisible}
    animationType="slide"
    transparent
  >
    <Container>
      <Frame>
        <Title>Selecione o nível:</Title>
        <LevelButton btnText="Fácil" onPress={() => props.onLevelSelected(0.1)} bgColor="green" />
        <LevelButton btnText="Médio" onPress={() => props.onLevelSelected(0.2)} bgColor="blue" />
        <LevelButton btnText="Difícil" onPress={() => props.onLevelSelected(0.3)} />
      </Frame>
    </Container>
  </Modal>
);

export default LevelSelection;
