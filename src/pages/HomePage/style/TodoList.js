import styled, { keyframes, css } from "styled-components";

export const TotalWrapper = styled.div`
    width: 75%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #F2F2F2;
`;

export const TitleWrapper = styled.div`
width: 90%;
height: 10%;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
font-size: 20px;
font-weight: bold;`;

export const Title = styled.text``;


export const DateWrapper = styled.div`
width: 90%;
height: 5%;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
font-size: 17px;
font-weight: bold;`;

export const Date = styled.text``;

export const MissionTotalWrapper = styled.div`
width: 85%;
height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;


export const MissionFrame = styled.div`
width: 280px;
    height: 220px;
    overflow-y: auto;
`;
const borderFadeAnimation = (color) => keyframes`
    
  0% {
    border-color: ${color}00; /* 완전히 투명한 상태 */
  }
  50% {
    border-color: ${color}FF; /* 완전히 불투명한 상태 */
  }
  100% {
    border-color: ${color}00; /* 다시 완전히 투명해짐 */
  }
`;

export const MissionWrapper = styled.div`
  width: 260px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 2px 2px 0px grey;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 3px;
  border-radius: 20px;
  position: relative;
  border: 2px solid ${(props)=> props.color}; /* 애니메이션과 동일한 초기 상태 */
    ${(props) =>
            (props.category === "강제 미션!" || props.category === "AI 생성!") &&
            css`animation: ${borderFadeAnimation(props.color || "black")} 4s linear infinite;`} /* 애니메이션 적용 */
`;

export const MissionTextWrapper = styled.div`
    width: 50%;
    height: 70%;
    overflow-x: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    white-space: nowrap;
    font-size: 13px;
    background-color: #F2F2F2;
    ::-webkit-scrollbar{
        height: 2px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: gray;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
        backgroound-color: #555;
    }
    margin-left: 10px;
`;
export const MissionCheckWrapper = styled.div`
    width: 10%;
    height: 70%;
    background-color: gold;
`;
export const MissionTypeWrapper = styled.div`
    width: 15%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    font-weight: bold;
    color: ${(props) => props.color};
    margin-left: 10px;

`;
export const MissionEditWrapper = styled.div`
    width: 10%;
    height: 70%;
    margin-left: 5px;
    background-color: gray;
`;

export const AddButtonWrapper = styled.div``;

export const AddButton = styled.button``;
