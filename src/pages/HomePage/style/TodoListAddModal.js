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
    width: 380px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    margin-bottom: 100px;
`;

export const TopButtonWrapper = styled.div`//Wrapper1
    width: 80%;
    height:10%;
    display: flex;
    justify-content:space-between;

`;
export const CategoryChangeButton = styled.button`
    height: 100%;
    border: none;
    font-size: 10px;
    font-weight: bold;
    color: #7DB1FF;
    background-color: transparent;
`
export const ExitButton = styled.button`
    width: 10%;
    height: 100%;
    border: none;
    font-size: 20px;
    color: #7DB1FF;
    background-color: transparent;
`;
export const InputWrapper = styled.div`//Wrapper2
    width: 80%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 2px solid #7DB1FF;

`;
export const InputWrapperCategory = styled.div`//Wrapper2
    width: 80%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 2px solid #7DB1FF;
    margin-bottom: 120px;

`;
export const Input = styled.input`
    border: none;
    outline: none;
    width: 90%;
    height: 70%;
    color: #7DB1FF;
    font-weight: bold;
    ::placeholder {
        color: #B0C4FF; 
        opacity: 0.7; 
        border: none;
        font-weight: bold;
        
    }

`;
export const CategoryButtonWrapper = styled.div` //Wrapper 3
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 40%;


`;
export const CategoryButtonScrollWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 290px;
    height: 50px;
    overflow-y: hidden;
    overflow-x: auto;
    padding: 5px;
  
`;
export const CategoryButton = styled.button`
    height: 50px;
    min-width: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    background-color: ${(props) => props.color};
    opacity: ${(props) => (props.isSelected ? 1 : 0.3)}; /* 선택된 버튼은 불투명 */
`;



export const ColorInput = styled.input`
    width: 10%;
    height: 60%;
    border: none;
    background-color: transparent;
`;
