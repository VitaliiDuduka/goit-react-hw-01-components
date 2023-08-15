import { styled } from 'styled-components';

export const Container = styled.section`
  background-color: rgba(238, 235, 247, 0.829);
  width: 100%;
  padding: 150px;
  margin: 20px;
`;

export const StatsContainer = styled.ul`
  background-color: white;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
`;

export const StatsTitle = styled.h2`
  background-color: white;
  margin: 0px;
  text-align: center;
  padding: 40px;
  font-size: 32px;
  color: gray;
`;

export const StatsUnit = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 20%;
  background-color: ${props => props.bc};
  color: whitesmoke;
  &:hover {
    color: black;
  }
  padding: 20px 0 20px 0;
`;

export const Label = styled.span`
  font-size: 28px;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 36px;
`;
