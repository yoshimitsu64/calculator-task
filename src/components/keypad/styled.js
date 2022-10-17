import styled from "styled-components";

export const StyledKeypadContainer = styled.div`
    width: 100%;
`
export const StyledKeyboard = styled.div`
    display:flex;
    width:100%;
    height:100%;
    justify-content:space-between;
    flex-wrap: wrap;
    padding-bottom:20px;
`
export const StyledKey = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    width:15%;
    height:20%;
    font-size:50px;
    margin:1%;
    border:none;
    &:hover{
        transition:all 0.2s;
        background-color:rgba(0,0,0,.4);
        cursor : pointer;
    }
`