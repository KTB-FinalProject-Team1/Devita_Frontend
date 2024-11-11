import axios from 'axios';

export const getCharacterInfo = async () => {

    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/v1/users/me`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
                },
                timeout: 20000
            }
        );
        console.log('제일 처음 fetch',response);
        return response.data.data;
    } catch (error) {
        console.error("사용자 캐릭터 정보 호출 실패:", error.message);
        throw error;
    }
};