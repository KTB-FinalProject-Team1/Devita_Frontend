import React, { useEffect } from 'react';
import axios from 'axios';

function KakaoRedirectHandler() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        // 페이지 로드 시 access token 요청
        const fetchAccessToken = async () => {
            try {
                const response = await axios.post(`${BASE_URL}/api/auth/login/kakao`, {}, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true // 쿠키와 함께 요청
                });

                if (response.status === 200) {
                    console.log('Access token received:', response.data); // 성공 시 토큰 출력
                    // 필요 시 전역 상태에 토큰 저장
                } else {
                    console.error('Failed to retrieve access token:', response.status);
                }
            } catch (error) {
                console.error('Error during access token request:', error);
            }
        };

        fetchAccessToken();
    }, [BASE_URL]);

    return <p>로그인 중입니다. 잠시만 기다려 주세요...</p>;
}

export default KakaoRedirectHandler;