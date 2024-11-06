import React, { useEffect, useState } from 'react';
import * as style from './style/TodoList';
import TodoListAddModal from './TodoListAddModal';
import AddCategoryModal from "./TodoListAddCategory";
import ButtonBlue from "../../components/Buttons/ButtonBlue";

import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, setTodos } from '../../store/todoSlice';
import { fetchCategories, setCategories } from '../../store/categoriesSlice';
import { addTodo } from '../../api/AddTodo';

const TodoList = ({ selectedDate, onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [color, setColor] = useState('');

    {/*redux-store로 todo,category 상태관리*/}
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const allTodos = useSelector((state) => state.todos);
    const formattedDate = selectedDate.toLocaleDateString('en-CA');
    const todos = allTodos.filter(todo => todo.date === formattedDate);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const openCategoryModal = () => setIsCategoryModalOpen(true);
    const closeCategoryModal = () => setIsCategoryModalOpen(false);

    {/* useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todosData = await getTodo('weekly');
                setAllTodos(todosData);
                console.log("불러온 할 일 목록:", todosData);
            } catch (error) {
                console.error("todolist 불러오기 실패:", error);
            }
        };

        fetchTodos();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesData = await getCategories();

                const mappedCategories = categoriesData.map(category => ({
                    ...category,
                    color: category.color || '#CCCCCC' // 기본 색상 설정
                }));

                setCategories(prevCategories => [
                    ...prevCategories,
                    ...mappedCategories
                ]);
            } catch (error) {
                console.error("카테고리 불러오기 실패", error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const selectedDateTodos = allTodos.filter(todo => todo.date === formattedDate);
        setTodos(selectedDateTodos);
    }, [selectedDate, allTodos]); */}

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchTodos('weekly'));
    },[dispatch]);
    useEffect(() => {
        console.log("선택한 날짜에 해당하는 할 일 목록:", todos, formattedDate);
    }, [todos, formattedDate]);

    const handleAddTodo = async (todoText, categoryId) => {
        const todoData = {
            categoryId: categoryId, // 예시로 categoryId를 설정
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

    return (
        <style.TotalWrapper>
            <style.DateWrapper>
                <style.Date>{selectedDate.toDateString()}</style.Date>
            </style.DateWrapper>
            <style.MissionTotalWrapper>
                <style.MissionFrame>
                    {todos.map((todo, index) => (
                        <style.MissionWrapper key={`${todo.todoId}-${index}`} category={todo.categoryId} color={todo.color}>
                            <style.MissionCheckWrapper />
                            <style.MissionTextWrapper>{todo.title}</style.MissionTextWrapper>
                            <style.MissionTypeWrapper color={todo.color}>{todo.category}</style.MissionTypeWrapper>
                            <style.MissionEditWrapper />
                        </style.MissionWrapper>
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