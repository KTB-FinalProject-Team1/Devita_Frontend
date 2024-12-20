import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function KakaoRedirectHandler() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate();

    useEffect(() => {
        // 페이지 로드 시 access token 요청
        const fetchAccessToken = async () => {
            try {
                console.log('Attempting to fetch access token...');
                const response = await axios.post(`${BASE_URL}/api/v1/auth/user/info`, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true // 쿠키와 함께 요청

                });

                if (response.status === 200) {
                    alert('로그인 성공!');
                    sessionStorage.setItem('accessToken', response.data.data.accessToken);
                    sessionStorage.setItem('userNickname', response.data.data.nickname);
                    navigate('/onboarding');
                    console.log('로그인 및 사용자 정보 불러오기 성공:',response.data.data);
                } else {
                    console.error('Failed to retrieve access token:', response.status);
                }
            } catch (error) {
                console.error('로그인 리다이렉트 실패:', error);
            }
        };

        fetchAccessToken();
    }, [BASE_URL]);

    return <p>로그인 중입니다. 잠시만 기다려 주세요...</p>;
}

export default KakaoRedirectHandler;