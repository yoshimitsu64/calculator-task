import styled from "styled-components";
export const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${(props)=>props.theme.background};
  transition: all 0.6s;
`;