import React, { Component } from 'react';
import { Alert } from 'react-native';
import params from '~params';
import LevelSelection from '~/components/LevelSelection';
import Header from '~components/Header';
import MineField from '~components/MineField';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from '~functions';
import { Container, Board } from './styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return Math.ceil(cols * rows * params.difficultyLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    };
  };

  onOpenField = (row, col) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, col);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('BOOOOOM!', 'Perdeu :(');
    }
    if (won) {
      Alert.alert('Parabéns!', 'Você venceu!');
    }

    this.setState({ board, won, lost });
  };

  onFlagField = (row, col) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, col);
    this.setState({ board });
  };

  onLevelSelected = (level) => {
    params.difficultyLevel = level;
    this.setState(this.createState());
  };

  render() {
    return (
      <Container>
        <LevelSelection
          isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })}
        />
        <Header
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })}
        />
        <Board>
          <MineField
            board={this.state.board}
            onOpenField={this.onOpenField}
            onFlagField={this.onFlagField}
          />
        </Board>
      </Container>
    );
  }
}

export default Main;
