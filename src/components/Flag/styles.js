import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 2px;

  ${({ bigger }) => bigger
    && `
      margin-top: 0;
    `}
`;

export const FlagPole = styled.View`
  position: absolute;
  height: 14px;
  width: 2px;
  background-color: #222;
  margin-left: 9px;

  ${({ bigger }) => bigger
    && `
      position: relative;
      margin-left: 0;
      height: 28px;
      width: 4px;
      margin-left: 16px;
    `}
`;

export const FlagBanner = styled.View`
  position: absolute;
  width: 6px;
  height: 5px;
  background-color: #f22;
  margin-left: 3px;

  ${({ bigger }) => bigger
    && `
      width: 14px;
      height: 10px;
      margin-left: 3px;
    `}
`;

export const Base1 = styled.View`
  position: absolute;
  height: 2px;
  width: 6px;
  background-color: #222;
  margin-left: 7px;
  margin-top: 10px;

  ${({ bigger }) => bigger
    && `
      height: 4px;
      width: 12px;
      margin-left: 12px;
      margin-top: 20px;
    `}
`;

export const Base2 = styled.View`
  position: absolute;
  height: 2px;
  width: 10px;
  background-color: #222;
  margin-left: 5px;
  margin-top: 12px;

  ${({ bigger }) => bigger
    && `
      height: 4px;
      width: 20px;
      margin-left: 8px;
      margin-top: 24px;
    `}
`;
