import styled from "styled-components";
const StyledContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 80px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.header};
  align-items: center;
  font-size: 30px;
  padding: 10px 10px 10px 10px;
`;
const StyledTitle = styled.div`
  color: white;
`;
const StyledRoutesContainer = styled.div`
    display : flex;
    justify-content: space-around;
    align-items:center;
`
const StyledRoute = styled.span`
    margin : 10px;
    color : white;
    &::after{
        display : block;
        content: '';
        width : 100%;
        height: 2px;
        background-color:red;
        transform: scaleX(0);
        transition : all 0.2s ;
    };
    &:hover::after{
        transform: scaleX(1);
    }
    &:hover{
        cursor: pointer;
    }
`;

export { StyledContainer, StyledTitle, StyledRoutesContainer, StyledRoute };
