import React, {useState} from 'react';
import * as style from './style/Onboarding.main';
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import {useNavigate} from "react-router-dom";


function Onboarding(){
    const [nickname, setNickname] = useState();
    const navigate = useNavigate();
    const handleConfirmClick = ()=>{
        console.log(nickname);
        navigate('/onboardingstack');
    }
    return (
        <style.TotalWrapper>
            <style.Wrapper>
                <style.TitleWrapper>
                    <style.Title>내가 세팅한 관심 개발 분야를 바탕으!</style.Title>
                    <style.Title>일일 미션이 하루마다 생성 됩니다!</style.Title>
                </style.TitleWrapper>
                <ButtonBlue width={'90%'} height={'50px'} onClick={handleConfirmClick}></ButtonBlue>
            </style.Wrapper>
        </style.TotalWrapper>
    )
}

export default Onboarding;