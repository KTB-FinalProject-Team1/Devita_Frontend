import { instance } from "./instance";
import axios from 'axios';

export const getCategories = async (categoryId = 0, title, date) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/todo/categories`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
            },
            withCredentials: true,
            timeout: 20000
        });
        const filteredData = response.data.data.filter(item => item.name !== "일일 미션" && item.name !== "자율 미션");
        console.error("카테고리 불러오기  성공", filteredData);
        return filteredData;

    } catch (error) {
        console.error("카테고리 불러오기  실패", error.message);

        throw error;
    }
};