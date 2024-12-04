import styled, {keyframes} from "styled-components";

export const TodayMissionTotalWrapper = styled.div`
    width: 85%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;


`;
export const TodayMissionTitle = styled.div`
    width: 95%;
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
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
  height: 50px;
  border-radius: 20px;
  border: 2.5px solid rgba(8, 107, 255, 0); /* 초기에는 투명한 상태 */
  margin-top: 5px;
  
  /* 애니메이션에 color를 전달하여 적용 */
  animation: ${({ color = '8, 107, 255' }) => borderFadeAnimation(color)} 4s linear infinite;
`;

export const TodayMissionText = styled.text``;
export const TodayMissionExplainDiv = styled.div`
    width: 83%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
export const TodayMissionExplain = styled.text`
    font-size: 13px;
    font-weight: bold;
`;
export const TodayMissionButton = styled.button`
    
    
`