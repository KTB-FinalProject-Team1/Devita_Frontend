import axios from 'axios';

export const updateNutrition = async (todoId) => {

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/v1/character/use/nutrition`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
                },
                withCredentials: true,
                timeout: 20000
            }
        );
        console.log("영양제 업데이트 성공",response.data);
        return response.data;
    } catch (error) {
        console.error("영양제 업데이트 실패:", error.message);
        throw error;
    }
};