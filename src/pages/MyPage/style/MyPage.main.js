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
    background-color: #D6E6FF;
    
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

export const SubMenuWrapper = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: flex-end;
`;
export const SubMenuButton = styled.button`
    border: none;
    margin-left: 5px;
    font-weight: bold;
    background-color: transparent;
    &:hover{
        color: #7DB1FF;
    }
`;

export const CharacterNameWrapper = styled.div`
    width: 100%;
    height:5%;
    display: flex;
    align-items: flex-end;
`;
export const Name = styled.text`
    font-size: 22px;
    font-weight: bold;
    margin-left: 10px;
    
`;

export const CharacterText = styled.text`
    font-size: 18px;
    font-weight: 700;
    margin-left: 10px;
`;

export const CharacterTotalWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const CharacterDevelopWrapper = styled.div`
    width: 90%;
    height: 35%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`;
export const CharacterLevelWrapper = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CharacterLevelTitleWrapper = styled.div`
    width: 80%;
    height: 30%;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const Percent = styled.text `
    font-size: 14px;
    font-weight: bold;
    color:  #7DB1FF;;
`
export const CharacterLevelBar = styled.div`
    width: 82%;
    height: 35%;
    position: relative;
    border-radius: 30px;
    margin-top: 5px;
    background-color: #CECECE;
`;
export const CharacterLevelBarInner = styled.div`
    width: ${(props) => props.dealt + "%"};
    height:100%;
    position:absolute;
    left: 0;
    bottom: 0;
    border-radius: 30px;
    margin-top: 5px;
    background-color: #7DB1FF;
`;
export const CharacterButtonWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const CharacterButton = styled.button`
    width: 78%;
    height: 88%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    margin: 5px;
    background-color: #E9E9E9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    &:hover{
        width:83%;
        height:93%;
        color: gray;
        background-color: #D6E6FF;
    }

`;
export const CharacterButtonTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

`;
export const CharacterButtonImageWrapper = styled.img`
    width: 65px;
    height: 60px;
    margin-left: 5px;
   

`;
export const CharacterButtonTitle = styled.text`
    font-size: 17px;
    font-weight: bold;

`;
export const CharacterButtonSubTitle = styled.text`
    font-size: 15px;
    font-weight: bold;
    color: #7DB1FF;

`;

