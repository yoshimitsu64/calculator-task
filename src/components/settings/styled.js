import styled from "styled-components";

export const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 70px;
  color: ${({theme}) => theme.display};
  font-size: 50px;
`;
export const StyledSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.display};

`;

export const StyledCleanHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  background-color: grey;
  border: none;
  color: white;
  height: 40px;
  font-size: 13px;
  margin-bottom: 10px;
  &:active {
    transform: scale(0.9);
  }
`;
