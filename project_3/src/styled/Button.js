import styled from "styled-components";

export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    min-width: 220px;
    border-radius: 5px;
    background: #000000;
    border: none;
    font-size: 13px;
    transition: 0.4s  ease-in;
    cursor: pointer;
    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s  ease-in;
    }
`;    

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover {
        background-color: black;
        border: 1px solid transparent;
        color: white;
    }
`;