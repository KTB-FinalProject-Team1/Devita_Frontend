import axios from 'axios';

export const updateTodo = async (todoId) => {

    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BASE_URL}/api/v1/todo/${todoId}/toggle`,
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
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("투두리스트 업데이트 실패:", error.message);
        throw error;
    }
};