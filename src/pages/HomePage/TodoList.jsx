import React, { useEffect, useState } from 'react';
import * as style from './style/TodoList';
import TodoListAddModal from './TodoListAddModal';
import AddCategoryModal from "./TodoListAddCategory";
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import TodoItem from './TodoItem';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, setTodos } from '../../store/todoSlice';
import { fetchCategories, setCategories } from '../../store/categoriesSlice';
import { addTodo } from '../../api/AddTodo';
import { updateTodo } from "../../api/UpdateTodo";

const TodoList = ({ selectedDate, onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [color, setColor] = useState('');
    const [clickedTodos, setClickedTodos] = useState({});

    {/*redux-store로 todo,category 상태관리*/}
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const allTodos = useSelector((state) => state.todos);

    const formattedDate = selectedDate.toLocaleDateString('en-CA');
    const todos = allTodos
        .filter(todo => todo.date === formattedDate)
        .map(todo => {
            const category = categories.find(cat => cat.id === todo.categoryId);
            return {
                ...todo,
                color: category ? category.color : '#CCCCCC', // 기본 색상 설정
                categoryName: category ? category.name : 'Unknown',
                isChecked: clickedTodos[todo.todoId] || false,
            };
        });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const openCategoryModal = () => setIsCategoryModalOpen(true);
    const closeCategoryModal = () => setIsCategoryModalOpen(false);

    const handleToggleClick = async (todoId) => {
        const isCurrentlyChecked = clickedTodos[todoId] || false;
        const newIsChecked = !isCurrentlyChecked; // 상태 반전
        setClickedTodos((prevClickedTodos) => ({
            ...prevClickedTodos,
            [todoId]: newIsChecked,
        }));

        const newStatus = newIsChecked ? true : false;

        try {
            await updateTodo(todoId, newStatus); // 업데이트 API 호출
            dispatch(setTodos(todos.map(t =>
                t.todoId === todoId ? { ...t, isChecked: newIsChecked, status: newStatus } : t
            )));
            console.log('투두 성공',todoId, newStatus);
        } catch (error) {
            console.error('업데이트 실패', error, todoId);
        }
    };
    const handleAddTodo = async (todoText, categoryId) => {
        const todoData = {
            categoryId: categoryId,
            title: todoText,
            date: formattedDate
        };
        console.log(todoData);

        try {
            const response = await addTodo(todoData.categoryId, todoData.title, todoData.date);
            console.log('할 일 추가 성공:', response);
            dispatch(setTodos([...allTodos, { ...todoData, id: response.id }]));

            onAddTodo(formattedDate, { text: todoText, category, color });
            closeModal();
        } catch (response) {
            console.error('할 일 추가 실패:', response);
        }
    };

    const handleDeleteTodo = (todoId) => {
        const updatedTodos = allTodos.filter(todo => todo.todoId !== todoId);
        dispatch(setTodos(updatedTodos)); // 상태에서 삭제된 Todo 반영
    };



    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchTodos('weekly'));
    },[dispatch]);
    useEffect(() => {
        console.log("선택한 날짜에 해당하는 할 일 목록:", todos, formattedDate);
    }, [todos, formattedDate]);


    return (
        <style.TotalWrapper>
            <style.DateWrapper>
                <style.Date>{selectedDate.toDateString()}</style.Date>
            </style.DateWrapper>
            <style.MissionTotalWrapper>
                <style.MissionFrame>
                    {todos.map((todo, index) => (
                        <TodoItem
                        key={`${index}-${index}`}
                        todo={todo}
                        onCheckClick={() => handleToggleClick(todo.todoId)}
                        onDelete={() => handleDeleteTodo(todo.item)}
                        isChecked={todo.isChecked}/>
                    ))}
                </style.MissionFrame>
            </style.MissionTotalWrapper>
            <ButtonBlue width="80%" height="40px" onClick={openModal}>Add Todo</ButtonBlue>
            <TodoListAddModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={handleAddTodo}
                inputValue={inputValue}
                setInputValue={setInputValue}
                category={category}
                setCategory={setCategory}
                setColor={setColor}
                categories={categories}
                selectedDate={selectedDate}
                onOpenCategoryModal={openCategoryModal}
            />
            <AddCategoryModal
                isOpen={isCategoryModalOpen}
                onClose={closeCategoryModal}
                categories={categories}
                setCategories={(newCategories) => dispatch(setCategories(newCategories))}
            />
        </style.TotalWrapper>
    );
};

export default TodoList;