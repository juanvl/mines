import { Dimensions } from 'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15,
  difficultyLevel: 0.1,
  getColumnsAmount() {
    const { width } = Dimensions.get('window');
    return Math.floor(width / this.blockSize) - 1;
  },
  getRowsAmount() {
    const { height } = Dimensions.get('window');
    const boardHeight = height * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blockSize) - 1;
  },
};

export default params;
