import { instance } from "./instance";
import axios from 'axios';

export const getCategories = async (categoryId = 0, title, date) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL || 'http://localhost:8080'}/api/v1/todo/categories`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
            },
            withCredentials: true,
            timeout: 60000
        });

        console.log("Token:", sessionStorage.getItem('accessToken'));
        console.error("카테고리 불러오기  성공", response.data);
        return response.data;

    } catch (error) {
        console.error("카테고리 불러오기  실패", error.message);

        throw error;
    }
};