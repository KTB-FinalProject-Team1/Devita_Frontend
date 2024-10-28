import React, { useState, useEffect } from 'react';
import { format, startOfWeek, addWeeks, addDays, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import * as style from '../HomePage/style/Calendar';
import {constSelector} from "recoil";

const HomeCalendar = ({ selectDate,onSelectDate }) => {
    console.log(selectDate);
    // 현재 주의 시작일을 상태로 관리
    const [currentWeekStart, setCurrentWeekStart] = useState(
        startOfWeek(new Date(), { weekStartsOn: 1 })
    );

    // 주간 날짜 배열 생성 함수
    const generateCurrentWeek = (startDate) => {
        return Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));
    };

    const [currentWeek, setCurrentWeek] = useState(generateCurrentWeek(currentWeekStart));

    // currentWeekStart가 변경될 때마다 주간 날짜 배열 업데이트
    useEffect(() => {
        setCurrentWeek(generateCurrentWeek(currentWeekStart));
    }, [currentWeekStart]);

    // 이전 주로 이동
    const handlePreviousWeek = () => {
        setCurrentWeekStart((prev) => addWeeks(prev, -1));
    };

    // 다음 주로 이동
    const handleNextWeek = () => {
        setCurrentWeekStart((prev) => addWeeks(prev, 1));
    };

    return (
        <style.TotalWrapper>
            <style.DateMoveWrapper>
                <style.NavigationButton onClick={handlePreviousWeek}>{"<"}</style.NavigationButton>
                <style.MonthYearText>
                    {format(currentWeekStart, 'yyyy MM')}
                </style.MonthYearText>
                <style.NavigationButton onClick={handleNextWeek}>{">"}</style.NavigationButton>
            </style.DateMoveWrapper>
            <style.WeekWrapper>
                {currentWeek.map((day, index) => (
                    <style.EachDateWrapper key={index}>
                        <style.EachDayofWeek>{format(day, 'EEE',{locale:ko})}</style.EachDayofWeek> {/* 요일 */}
                        <style.EachDayButton
                            isToday={isSameDay(day, new Date())}
                            isSelected = {isSameDay(day, selectDate)}
                            onClick={() => onSelectDate(day)}
                        >
                            <style.EachDayText>{format(day, 'd')}</style.EachDayText> {/* 날짜 */}
                        </style.EachDayButton>
                    </style.EachDateWrapper>
                ))}
            </style.WeekWrapper>
        </style.TotalWrapper>
    );
};

export default HomeCalendar;