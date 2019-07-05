import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-top: 10px;
  width: 100px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || '#000'};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #eee;
  font-weight: bold;
`;
