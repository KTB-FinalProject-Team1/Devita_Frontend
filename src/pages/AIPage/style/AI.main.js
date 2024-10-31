import styled, { keyframes } from "styled-components";

///////animation////////
const fadeInUp = keyframes `
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to{
        opacity: 1;
        transform: translateY(0);
    }
`;

////////////////////////


export const TotalWrapper = styled.div`
    flex:1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const SubAIWrapper = styled.div`
    width: 80%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 20px;
    margin-bottom: 60px;
    padding: 10px;
    background-color: #DEDEDE;
`;

export const TopCategoryWrapper = styled.div `
    width: 90%;
    height: 20%;
    animation: ${fadeInUp} 1s ease forwards;
    
`;

export const TopCategorySelectWrapper = styled.div`
    width: 90%;
    height: 40px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;
export const TopCategorySelectScroll = styled.div`
    width: 270px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;

    ::-webkit-scrollbar{
        display: none;
    }
    scrollbar-width: none;

`;

export const TopCategoryButton = styled.button`
    width: 80px;
    height: 80%;
    margin-left:5px;
    border: none;
    border-radius: 5px;
    flex-shrink: 0;
    &:hover{
        background-color: #DEDEDE;
    }
`;


export const SubCategory = styled.div`
    width:90%;
    height: 27%;  
    animation: ${fadeInUp} 1s ease forwards;


`;
export const SubCategorySelectWrapper = styled.div`
    width: 90%;
    height: 90px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;
export const SubCategorySelectScroll = styled.div`
    width: 270px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
    margin-top: 5px;
    ::-webkit-scrollbar{
        display: none;
    }
    scrollbar-width: none;


`;

export const SubCategoryButton = styled.button`
    height: 30px;
    margin: 2px;
    flex-shrink: 0;
    font-size: 10px;
    border: none;
    border-radius: 5px;
    &:hover{
        background-color: #DEDEDE;
    }
`;



export const GenerateButtonWrapper = styled.div`
    width: 90%;
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${fadeInUp} 1s ease forwards;
    margin-top: 10px;
`;

export const GenerateButton = styled.button`
    background-color: #7DB1FF;
    color: white;
    width: 30%;
    height: 80%;
    border:none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: dodgerblue;
    }
`;

export const MissionWrapper = styled.div`
    width: 90%;
    height: 45%;
    animation: ${fadeInUp} 1s ease forwards;


`;

export const MissionSelectWrapper = styled.div`
`;

export const MissionSelectButtonWrapper = styled.div`
    width: 100%;
    height: 40px;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 15px;


`;

export const MissionRegenerateButton = styled.button`
    height: 80%;
    border: none;
    border-radius: 5px; 
    margin-right: 10px;
    background-color: #f0f0f0;
    font-size: 10px;
    font-weight: bold;
    
`;
