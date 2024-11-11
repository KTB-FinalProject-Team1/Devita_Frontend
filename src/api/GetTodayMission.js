import axios from 'axios';

export const getTodayMission = async () => {

    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/v1/mission/daily`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
                },
                timeout: 20000
            }
        );
        return response.data;
    } catch (error) {
        console.error("일일 미션 호출 실패:", error.message);
        throw error;
    }
};