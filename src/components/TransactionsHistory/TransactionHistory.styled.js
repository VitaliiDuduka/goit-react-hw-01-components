import { styled } from 'styled-components';

export const TransTable = styled.table`
  width: 100%;
  margin: 20px;
  box-shadow: 0px 4px 3px 4px rgba(0, 0, 0, 0.2);
`;

export const TableHead = styled.thead`
  background-color: aqua;
  font-size: 24px;
  height: 80px;
  color: white;
`;

export const TableRow = styled.tr`
  height: 80px;
  color: gray;
  font-size: 24px;
  vertical-align: middle;
  text-align: center;
  &:nth-child(2n) {
    background-color: lightgray;
  }
`;

export const TypeCell = styled.td`
  &:first-letter {
    text-transform: uppercase;
  }
  text-align: start;
  padding-left: 10%;
`;
