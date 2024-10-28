import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
    flex:1;
    width: 100%;
    height: 100vh;
    background-color: gold;

`;
export const TodayMissionTotalWrapper = styled.div`
    width: 100%;
    height: 18%;
    flex-grow:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;


`;
export const TodayMissionTitle = styled.div`
    width: 84%;
    font-size: 20px;
    font-weight: bold;
`;

const borderFadeAnimation = (color) => keyframes`
    
  0% {
    border-color: rgba(${color}, 0); /* 완전히 투명한 상태 */
  }
  50% {
      border-color: rgba(${color}, 1); /* 완전히 불투명한 상태 */
  }
  100% {
      border-color: rgba(${color}, 0); /* 다시 완전히 투명해짐 */
  }
`;
export const TodayMissionWrapper = styled.div`
  width: 85%;
  height: 60px;
  border-radius: 20px;
  border: 2.5px solid rgba(8, 107, 255, 0); /* 초기에는 투명한 상태 */
  margin-top: 5px;
  
  /* 애니메이션에 color를 전달하여 적용 */
  animation: ${({ color = '8, 107, 255' }) => borderFadeAnimation(color)} 4s linear infinite;
`;

export const TodayMissionText = styled.text``;
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