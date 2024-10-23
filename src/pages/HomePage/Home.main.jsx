import React, { useState } from 'react';
import * as style from "./style/Home.main";
import Calendar from "../HomePage/Calendar";
import TodoList from "../HomePage/TodoList";


function HomePage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [todos, setTodos] = useState({});

    const addTodo = (date, todo) => {
        const dateKey = date.toISOString().split('T')[0];
        setTodos((prevTodos)=>({
            ...prevTodos,
            [dateKey]:[...(prevTodos[dateKey] || []), todo],
        }))
    }
    return(
        <style.Wrapper>
            <style.ScrollWrapper>
                <style.TodayMissionWrapper>
                    <div></div>
                </style.TodayMissionWrapper>
                <style.CalendarWrapper>
                    <Calendar selectDate={selectedDate} onSelectDate={setSelectedDate}></Calendar>

                </style.CalendarWrapper>
                <style.TodoListWrapper>
                    <TodoList
                        selectedDate={selectedDate}
                        todos={todos[selectedDate.toISOString().split('T')[0]] || []}
                        onAddTodo={addTodo}/>
                </style.TodoListWrapper>


            </style.ScrollWrapper>


        </style.Wrapper>

    )
}

export default HomePage;