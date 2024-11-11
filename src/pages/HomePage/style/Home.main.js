import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    ::-webkit-scrollbar{
        display: none;
    }
    scrollbar-width: none;
    background-color: #D6E6FF;


`;

export const SubWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 20px 20px 0px 0px;
    margin-top: 20px;
    
`;
export const CalendarWrapper = styled.div`
    width: 90%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
export const TodoListWrapper = styled.div`
    width: 90%;
    flex-grow:1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    
`;