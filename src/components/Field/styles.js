import styled from 'styled-components/native';

export const FieldContainer = styled.View`
  height: ${({ blockSize }) => blockSize}px;
  width: ${({ blockSize }) => blockSize}px;
  border-width: ${({ borderSize }) => borderSize}px;
  background-color: #999;
  border-left-color: #ccc;
  border-top-color: #ccc;
  border-right-color: #333;
  border-bottom-color: #333;

  ${({ opened }) => opened
    && `
      background-color: #999;
      border-left-color: #777;
      border-top-color: #777;
      border-right-color: #777;
      border-bottom-color: #777;
      align-items: center;
      justify-content: center;
    `}

  ${({ exploded }) => exploded
    && `
      background-color: red;
      border-left-color: red;
      border-top-color: red;
      border-right-color: red
      border-bottom-color: red;
      align-items: center;
      justify-content: center;
    `}
`;

export const FieldText = styled.Text`
  color: ${({ textColor }) => `${textColor}`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: bold;
`;
