import styled from "styled-components";

export const StyledHistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.devider};
  }
`;

export const StyledHistory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: 30px;
  overflow: auto;
`;

export const StyledHistoryItem = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px;
  color: ${({ theme }) => theme.history};
`;
export const StyledHistoryTitle = styled.div`
  align-self: center;
  height: 5%;
  color: ${({ theme }) => theme.history};
`;
