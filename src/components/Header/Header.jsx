import React, { useEffect, useState } from "react";
import * as style from "./style/Header";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


export const Header = ({ color, background , title, isBack}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const userNickname = sessionStorage.getItem("userNickname");

    // 토큰 유효성 검증 함수
    const checkTokenValidity = () => {
        const token = sessionStorage.getItem("accessToken");
        if (!token) {
            setIsAuthenticated(false);
            return;
        }

        try {
            const decoded = jwtDecode(token); // 토큰 디코딩
            const currentTime = Math.floor(Date.now() / 1000); // 현재 시간(초)

            if (decoded.exp < currentTime) {
                // 토큰이 만료되었을 경우
                sessionStorage.removeItem("accessToken"); // 만료된 토큰 삭제
                setIsAuthenticated(false);
            } else {
                // 토큰이 유효할 경우
                setUsername(decoded.username || "한주리"); // 토큰에서 username 추출
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Invalid token:", error);
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        checkTokenValidity();
    }, []);

    const handleClickLogin = () => {
        navigate("/login");
    };

    return (
        <style.Layout color={color} background={background}>
            <style.Logo>
                <style.LogoText>{title}</style.LogoText>
            </style.Logo>
            {isBack && (
                <style.BackIcon
                    onClick={() => {
                        navigate(-1);
                    }}
                />
            )}
            {isAuthenticated ? (
                <style.LoginButtonWrapper>
                    <style.LoginButtonName>{userNickname}</style.LoginButtonName>
                    님 환영합니다
                </style.LoginButtonWrapper>
            ) : (
                <style.LoginButton onClick={handleClickLogin}>로그인 해주세요</style.LoginButton>
            )}
        </style.Layout>
    );
};

export default Header;