import styled, { keyframes, css } from "styled-components";

export const OverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const ModalWrapper = styled.div`
    width: 100%;
    max-width: 390px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
`;

export const ExitWrapper = styled.div`
    width: 80%;
    height:10%;
    background-color: yellow;

`;
export const InputWrapper = styled.div`
    width: 80%;
    height:10%;
    background-color: pink;

`;
export const Input = styled.input``;