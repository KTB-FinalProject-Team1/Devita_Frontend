import { instance } from "./instance";

export const addTodo = async (categoryId = 0, title, date) => {
    const formattedDate =  new Date(date).toISOString().split("T")[0];
    try {
        const response = await instance.post('/api/v1/todo', {
            categoryId,
            title,
            date: formattedDate,
        });
        return response.data;

    } catch (error) {
        console.error("투두리스트 추가 실패", error.message);
        throw error;
    }
};