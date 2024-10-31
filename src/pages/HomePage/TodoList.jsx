import React, { useState } from 'react';
import * as style from './style/TodoList';
import TodoListAddModal from './TodoListAddModal';
import AddCategoryModal from "./TodoListAddCategory";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonBlue from "../../components/Buttons/ButtonBlue";

const TodoList = ({ selectedDate, todos, onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [color, setColor] = useState('');
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleAddTodo = (todoText, category) => {
        const todo = { text: todoText, category, color };
        console.log('리스트 정보', todo);
        onAddTodo(selectedDate, todo);
        closeModal();
    };
    //예시 categories
    const [categories, setCategories] = useState([
        { name: 'Work', color: '#FFA7A7' },
        { name: 'AI 생성!', color: '#7DB1FF' },
        { name: '강제 미션!', color: '#086BFF' },
        { name: 'Shopping', color: '#FFCD68' },
        { name: 'Others', color: '#6FFFCF' },
    ]);



    return (
        <style.TotalWrapper>
            <style.DateWrapper>
                <style.DateWrapper>
                    <style.Date>{selectedDate.toDateString()}</style.Date>
                </style.DateWrapper>
            </style.DateWrapper>
            <style.MissionTotalWrapper>
                <style.MissionFrame>
                    {todos.map((todo, index) => (
                        <style.MissionWrapper key={index} category = {todo.category} color={todo.color}>
                            <style.MissionCheckWrapper>
                                {/* 체크박스 등의 UI가 필요하다면 여기에 추가 */}
                            </style.MissionCheckWrapper>
                            <style.MissionTextWrapper>
                                {todo.text} {/* 할 일 텍스트 */}
                            </style.MissionTextWrapper>
                            <style.MissionTypeWrapper color={todo.color}>
                                {todo.category} {/* 선택된 카테고리 */}
                            </style.MissionTypeWrapper >
                            <style.MissionEditWrapper>
                                {/* 수정/삭제 등의 UI가 필요하다면 여기에 추가 */}
                            </style.MissionEditWrapper>
                        </style.MissionWrapper>
                    ))}
                </style.MissionFrame>
            </style.MissionTotalWrapper>
            <ButtonBlue width="80%" height="40px" onClick={openModal} >
                Add Todo
            </ButtonBlue>
            <TodoListAddModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={handleAddTodo}
                inputValue={inputValue}
                setInputValue={setInputValue}
                category={category}
                setCategory={setCategory}
                setColor = {setColor}
                categories={categories}
                onOpenCategoryModal={() => setIsCategoryModalOpen(true)}
            />
            <AddCategoryModal
                isOpen={isCategoryModalOpen}
                onClose={() => setIsCategoryModalOpen(false)}
                categories = {categories}
                setCategories = {setCategories}/>
        </style.TotalWrapper>
    );
};

export default TodoList;