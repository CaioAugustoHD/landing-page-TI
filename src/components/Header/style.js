import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 3em;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${({theme}) => theme.body};
`;

export const Menu = styled.nav`
    display: flex;
    gap: 3em;
`;

export const ButtonClient = styled.button`
    width: 170px;
    margin: 0 13px;
    font-size: 1em;
    border: none;
    border-radius: 18px;
    padding: 6px 0;
    background-color: ${({theme}) => theme.red};
    color: #FFF;
`;