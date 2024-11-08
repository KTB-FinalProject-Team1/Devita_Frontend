import React from 'react';
import * as style from './style/TodoList'; // 기존 스타일 임포트
import { FaCheck } from 'react-icons/fa';
import { deleteTodoAsync } from '../../store/todoSlice';
import {useDispatch} from "react-redux";

const TodoItem = ({ todo, onCheckClick, onDelete, isChecked }) => {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        const isConfirmed = window.confirm('삭제하시겠습니까?');
        if(!isConfirmed) return;
        dispatch(deleteTodoAsync(todo.todoId)).then(() => {
            alert('삭제되었습니다!');
        }).catch((err) => {
            console.log('삭제 실패',err);
        })
    }
    return (
        <style.MissionWrapper category={todo.categoryId} color={todo.color}>
            <style.MissionCheckWrapper onClick={() => onCheckClick(todo.todoId)} color={todo.color}>
                {todo.status && <FaCheck color={`${todo.color}`} style={{fontSize:'16px'}}/>}
            </style.MissionCheckWrapper>
            <style.MissionTextWrapper isChecked={todo.status}>{todo.title}</style.MissionTextWrapper>
            <style.MissionTypeWrapper color={todo.color}>{todo.categoryName}</style.MissionTypeWrapper>
            <style.MissionEditWrapper>
                <style.MissionEditButton onClick={handleDelete}>...</style.MissionEditButton>
            </style.MissionEditWrapper>
        </style.MissionWrapper>
    );
};

export default TodoItem;