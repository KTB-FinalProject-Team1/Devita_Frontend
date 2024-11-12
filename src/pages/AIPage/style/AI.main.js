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

const scaleAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.2);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.2);
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
    font-size: 12px;
    background-color: ${props => props.selected ? '#D6E6FF' : 'white'};
    color: ${props => props.selected ? 'gray' : 'black'};
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
    background-color: ${props => props.selected ? '#D6E6FF' : 'white'};
    color: ${props => props.selected ? 'gray' : 'black'};
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
    margin-top: 10px;
`;

export const MissionWrapper = styled.div`
    width: 90%;
    height: 45%;
    animation: ${fadeInUp} 1s ease forwards;


`;

export const MissionSelectWrapper = styled.div`
`;
export const MissionEachWrapper = styled.button`
    width: 90%;
    height: 27%;
    border-radius: 10px;
    margin-top: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid ${({ level, selected }) =>
            selected ? '#7DB1FF' : 
                level === 1 ? '#DEDEDE' :
                    level === 2 ? '#FFDD57' :
                            '#FF6B6B'};
    background-color: ${({ level, selected}) =>
            selected ? '#D6E6FF':
                level === 1 ? '#F9F9F9' :
                    level === 2 ? '#FFF4CC' :
                      
                            '#FFE5E5'};
    transition: background-color 0.3s ease, color 0.3s ease;
 
`;

export const MissionEachText = styled.div`
    font-size: 10px;
    width: 190px;
    display: flex;
    align-items: flex-start;
    overflow-x: auto;
`
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

export const LoadingWrapper =  styled.div`
    width: 90%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoadingText = styled.div`

    font-size: 15px;
    font-weight: bold;
`;
export const LoadingImg = styled.img`
    width: 25%;
    height: 35%;
    animation: ${scaleAnimation} 1.5s ease forwards;
`

