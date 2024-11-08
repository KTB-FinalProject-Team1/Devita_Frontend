import axios from 'axios';

export const deleteTodo = async (todoId) => {

    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/api/v1/todo/${todoId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
                },
                withCredentials: true,
                timeout: 20000
            }
        );
        return response.data;
    } catch (error) {
        console.error("투두리스트 삭제 실패:", error.message);
        throw error;
    }
};