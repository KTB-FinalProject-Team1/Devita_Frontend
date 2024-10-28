import React from 'react';
import axios from 'axios';
import * as style from "./style/Login.main";
import KakaoLogo from "../../assets/img/KakaoLogo.png";

function KakaoLogin() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const handleKakaoLogin = async () => {
        try {
            // 1. 카카오 로그인 화면으로 리디렉션
            window.location.href = `${BASE_URL}:8080/oauth2/authorization/kakao`;
        } catch (error) {
            console.error('Error during Kakao login redirection:', error);
        }
    };

    return (
        <style.Wrapper>
            <style.TitleWrapper>
                <style.SubTitle>비타민 섭취하듯</style.SubTitle>
                <style.SubTitle>좋은 개발 습관 형성을 위하여</style.SubTitle>
                <style.Logo>Devita</style.Logo>
            </style.TitleWrapper>

            <style.KakaoLoginWrapper onClick={handleKakaoLogin}>
                <style.KakaoLogo src={KakaoLogo} alt="Kakao Logo" />
                <style.KakaoLoginText>카카오로 로그인하기</style.KakaoLoginText>
            </style.KakaoLoginWrapper>
        </style.Wrapper>
    );
}

export default KakaoLogin;