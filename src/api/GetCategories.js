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
        console.error("카테고리 불러오기  성공", response.data.data);
        return response.data.data;

    } catch (error) {
        console.error("카테고리 불러오기  실패", error.message);

        throw error;
    }
};