import styled, {keyframes} from "styled-components";

export const TotalWrapper = styled.div`
    flex:1;
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    
`;

export const Wrapper = styled.div`
    flex:1;
    width: 95%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    ::-webkit-scrollbar{
        display: none;
    }
    scrollbar-width: none;
    
`;

export const ChangeWrapper = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1px solid;
    padding: 10px;
    color: #B0B0B0;
    margin-top: 15px;
`;

export const ChangeTitle = styled.text`
    font-size: 15px;
    font-weight: bold;

`;
export const ChangeMoveButton = styled.text``
