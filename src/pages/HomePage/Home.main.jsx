/* eslint-disable no-unused-vars, eqeqeq */
import React, { useState, useEffect } from 'react';
import * as style from "./style/Home.main";
import Calendar from "./Calendar";
import TodoList from "./TodoList";
import TodayMission from "./TodayMission";
function HomePage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [todos, setTodos] = useState({});

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const addTodo = (date, todo) => {
        setTodos((prevTodos)=>({
            ...prevTodos,
            [date]:[...(prevTodos[date] || []), todo],
        }))
    }
    return (
        <style.Wrapper>
            <TodayMission isOpend={false}></TodayMission>
            <style.SubWrapper>
                <style.CalendarWrapper>
                    <Calendar selectDate={selectedDate} onSelectDate={handleDateSelect}></Calendar>
                </style.CalendarWrapper>
                <style.TodoListWrapper>
                    <TodoList
                        selectedDate={selectedDate}
                        todos={todos[selectedDate.toISOString().split('T')[0]] || []}
                        setTodos={setTodos}
                        onAddTodo={addTodo}/>
                </style.TodoListWrapper>
            </style.SubWrapper>
        </style.Wrapper>
    )
}

export default HomePage;