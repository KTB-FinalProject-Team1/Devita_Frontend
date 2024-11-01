import { instance } from "./instance";

export const getCategories = async (categoryId = 0, title, date) => {
    try {
        const response = await instance.get('/api/v1/todo/category');
        return response.data;

    } catch (error) {
        console.error("카테고리 불러오기  실패", error.message);
        throw error;
    }
};