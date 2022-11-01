import styled from "styled-components";

export const StyledLayout= styled.div`
  height: ${({theme}) => theme.sizes.height[8]};
  width: ${({theme}) => theme.sizes.width[7]};
  overflow: hidden;
  background-color: ${({theme})=>theme.background};
  transition: all 0.6s;
`;