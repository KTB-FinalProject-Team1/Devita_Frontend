import { instance } from "./instance";

export const addCategory = async (name) => {
    
    try {
        const response = await instance.post('/api/v1/todo/category', {
            name
        });
        return response.data;

    } catch (error) {
        console.error("투두 카테고리 추가 실패", error.message);
        throw error;
    }
};