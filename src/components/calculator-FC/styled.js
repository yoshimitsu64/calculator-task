import styled from "styled-components";
export const StyledCalculatorContainer = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 50px;
  position: relative;
`;
export const StyledCalculatorDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-right:20px;
`;
export const StyledHistoryContainer = styled.div`
  width: 20%;
  height: 100%;
  display:${props => props.isHidden ? "block" : "none"};
`;
