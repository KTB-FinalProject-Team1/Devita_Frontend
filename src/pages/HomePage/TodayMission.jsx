import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as style from './style/TodayMission';
import ButtonBlue from "../../components/Buttons/ButtonBlue";


function TodayMission({ initialOpen }) {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const navigate = useNavigate();
    const moveTodayMission = () => {
        navigate('/todaymission');
    }
    return (
        <>
            {isOpen ? (
                <style.TodayMissionTotalWrapper>
                    <style.TodayMissionTitle>
                        오늘의 미션
                    </style.TodayMissionTitle>
                    <style.TodayMissionExplainDiv>
                        <style.TodayMissionExplain>오늘의 미션을 수행하고 퀘스트를 받으세요!</style.TodayMissionExplain>
                    </style.TodayMissionExplainDiv>
                    <style.TodayMissionWrapper>
                        <style.TodayMissionText>미션 1</style.TodayMissionText>
                    </style.TodayMissionWrapper>
                </style.TodayMissionTotalWrapper>
            ) : (
                <style.TodayMissionTotalWrapper>
                    <style.TodayMissionTitle>
                        오늘의 미션
                    </style.TodayMissionTitle>
                    <style.TodayMissionExplainDiv>
                        <style.TodayMissionExplain>오늘의 미션을 수행하고 퀘스트를 받으세요!</style.TodayMissionExplain>
                    </style.TodayMissionExplainDiv>

                    <ButtonBlue width={'80%'} onClick={moveTodayMission}>오늘 미션 확인하기</ButtonBlue>
                </style.TodayMissionTotalWrapper>
            )}
        </>
    )
}

export default TodayMission;