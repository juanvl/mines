import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  justify-content: space-around;
  padding-bottom: 20px;
`;

export const FlagContainer = styled.View`
  width: 100px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const FlagButton = styled.TouchableOpacity`
  width: 30px;
`;

export const FlagsLeft = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const NewGameButton = styled.TouchableOpacity`
  height: 50px;
  padding: 10px;
  background-color: #666;
  justify-content: center;
  align-items: center;
`;

export const NewGameButtonText = styled.Text`
  font-size: 20px;
  color: #ddd;
  font-weight: bold;
`;
