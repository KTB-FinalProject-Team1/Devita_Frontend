import React, { useState } from 'react';
import TodoListAddModal from './TodoListAddModal';
import * as style from './style/TodoList';

const TodoList = ({ selectedDate, todos, onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [color, setColor] = useState('');


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleAddTodo = (todoText, category) => {
        const todo = { text: todoText, category, color };
        console.log('리스트 정보', todo);
        onAddTodo(selectedDate, todo);
        closeModal();
    };

    return (
        <style.TotalWrapper>
            <style.TitleWrapper>
                <style.Title>To-Do List</style.Title>
            </style.TitleWrapper>
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
            <style.AddButtonWrapper>
                <style.AddButton onClick={openModal}>
                    Add Todo
                </style.AddButton>
            </style.AddButtonWrapper>
            <TodoListAddModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={handleAddTodo}
                inputValue={inputValue}
                setInputValue={setInputValue}
                category={category}
                setCategory={setCategory}
                setColor = {setColor}
            />
        </style.TotalWrapper>
    );
};

export default TodoList;