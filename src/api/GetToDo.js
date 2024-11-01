import { instance } from "./instance";

export const getCategories = async (viewType) => {
    try {
        const response = await instance.get(`/api/v1/todo/calendar?${viewType}`);
        return response.data;

    } catch (error) {
        console.error("사용자의 투두리스트 불러오기  실패", error.message);
        throw error;
    }
};