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
    background-color: white;
    
`;

export const Wrapper = styled.div`
    flex:1;
    width: 95%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    scrollbar-width: none;
    
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 70px;
    margin-top: 70px;
`;
export const TitleWrapperStack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    margin-top: 40px;
`;
export const Title = styled.text`
    font-size: 25px;
    font-weight: bold;
`;

export const NickNameWrapper = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

`;

export const NickNameTitle = styled.text`
    font-size: 18px;
    font-weight: bold;
`;

export const NickNameInputWrapper = styled.div`   
    width: 100%;
    height: 40%;
    border-bottom: 2px solid #B0B0B0;
    display: flex;
    align-items: flex-end;
    margin-top: 5px;
    margin-bottom: 30px;
    
`;


export const NickNameInput = styled.input`
    width: 100%;
    height: 80%;
    border: none;
    &:focus{
        border:none;
        outline:none;
        color:#7DB1FF;
    };
    font-weight: bold;

    
`;

export const StackTotalWrapper = styled.div`
    width: 90%;
    height: 55%;
    margin-bottom: 30px;
`;
export const StackWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;
export const StackMainCategory = styled.text`
    font-size: 17px;
    font-weight: bold;

`;
export const StackSubCategoryWrapper  = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
`;
export const SubCategoryButton = styled.button`
    height: 30px;
    min-width: 40px;
    margin: 2px;
    flex-shrink: 0;
    font-size: 10px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => (props.isSelected ? '#D6E6FF' : '#DEDEDE')};
    color: ${(props) => (props.isSelected ? 'gray' : 'black')};

`;

export const marginDiv = styled.div`
    height: 170px;
`;

export const SettingNameWrapper = styled.div``;
