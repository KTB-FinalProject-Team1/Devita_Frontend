/* eslint-disable no-unused-vars, eqeqeq */
import React, { useState, useEffect } from 'react';
import * as style from "./style/Home.main";
import Calendar from "../HomePage/Calendar";
import TodoList from "../HomePage/TodoList";
import { getCategories } from "../../api/GetCategories";

function HomePage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [todos, setTodos] = useState({});
    const [categories, setCategories] = useState({});

    const addTodo = (date, todo) => {
        const dateKey = date.toISOString().split('T')[0];
        setTodos((prevTodos)=>({
            ...prevTodos,
            [dateKey]:[...(prevTodos[dateKey] || []), todo],
        }))
    }
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesData = await getCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };

        fetchCategories();
    }, []);
    return (
        <style.Wrapper>
            <style.TodayMissionTotalWrapper>
                <style.TodayMissionTitle>
                    Today Mission
                </style.TodayMissionTitle>
                <style.TodayMissionWrapper>

                </style.TodayMissionWrapper>
            </style.TodayMissionTotalWrapper>
            <style.CalendarWrapper>
                <Calendar selectDate={selectedDate} onSelectDate={setSelectedDate}></Calendar>

            </style.CalendarWrapper>
            <style.TodoListWrapper>
                <TodoList
                    selectedDate={selectedDate}
                    todos={todos[selectedDate.toISOString().split('T')[0]] || []}
                    onAddTodo={addTodo}/>
            </style.TodoListWrapper>
        </style.Wrapper>
    )
}

export default HomePage;