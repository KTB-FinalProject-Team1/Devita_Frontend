import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
export const ScrollWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
`;
export const TodayMissionWrapper = styled.div`
    width: 100%;
    height: 18%;
    flex-grow:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #61dafb;


`;
export const CalendarWrapper = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;


`;
export const TodoListWrapper = styled.div`
    width: 100%;
    flex-grow:1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`;