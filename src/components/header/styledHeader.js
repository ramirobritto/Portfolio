import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: #1E1345;
    background-color: transparent;
    font-weight: bold;
    font-size: 18px;
    .containerHeader{
        height: 80px;
        width: 100%;
        max-width: 1100px;
        
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav, ul{
        display: flex;
        align-items: center;
        gap: 15px;
        


    }
    .pagesLinks{
        border-right: 2px solid #fff;
        padding-right: 30px;
    }
    .socialLinks{
        margin-top: 6px;
        padding-left: 15px;
    }
    li:hover{
        color: #00C0FF;
        cursor: pointer;
        transition: .3s;
    }
`