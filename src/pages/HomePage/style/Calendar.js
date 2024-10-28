import styled from 'styled-components';

// 전체 달력 컨테이너
export const TotalWrapper = styled.div`
    width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
`;

// 날짜 이동 버튼이 들어갈 상단 영역 (추후 좌/우 이동 버튼 추가 가능)
export const DateMoveWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 45%;
    max-width: 400px;
    margin-bottom: 10px;
`;

export const MonthYearText = styled.div`
font-size:23px;
font-weight: bold;
color: #333;
    margin: 25px;
`;
export const NavigationButton = styled.button`
background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #333;
    &:hover {
    color: #4caf50;
}
`;

export const WeekWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
`;



export const EachDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
`;

//요일 스타일
export const EachDayofWeek = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #495057;
  margin-bottom: 15px;
    
`;

//날짜 스타일
export const EachDayButton = styled.button`
  background-color: ${(props) => (
      props.isToday ? '#7DB1FF' :
              props.isSelected ? 'red': 'white'
  )};
  color: ${(props) => (props.isToday || props.isSelected ? '#ffffff' : '#000000')};
  border: none;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: 'white';
    color: 'black';
  }
`;


export const EachDayText = styled.div`
  font-weight: bold;
`;