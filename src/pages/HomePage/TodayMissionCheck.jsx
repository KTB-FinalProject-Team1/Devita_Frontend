import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as style from "./style/TodayMissionCheck";
import { motion } from "framer-motion";
import { getTodayMission } from "../../api/GetTodayMission";
import envelope from "../../assets/img/envelop2png.png";
import ButtonBlue from "../../components/Buttons/ButtonBlue";


function TodayMissionCheck() {
    const [mission, setMission] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodayMission = async () => {
            try {
                const data = await getTodayMission();
                console.log(data);

                setTimeout(() => {
                    setMission('Promise와 async,await의 차이 설명하기 가나다라마바사아자');
                    setIsLoading(false); // 데이터 설정 후 로딩 상태 해제
                }, 2000); // 5초 대기 시간 설정
            } catch (error) {
                console.log('일일 미션 호출 실패', error);
                setIsLoading(false); // 에러 발생 시 로딩 상태 해제
            }
        }

        fetchTodayMission();
    }, []);

    return (
        <style.TotalWrapper>
            {isLoading ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.3}} // 작게 시작
                    animate={{ opacity: 1, scale: 1 }} // 원래 크기로 커짐
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <style.LoadingImgWrapper>
                        <style.LoadingImg src={envelope}/>
                        <style.InfoText>오늘의 미션 생성!</style.InfoText>
                    </style.LoadingImgWrapper>
                </motion.div>
            ) : (
                <>
                    <style.MissionWrapper
                        as={motion.div}
                        initial={{x: 200, opacity: 0}} // 오른쪽에서 시작
                        animate={{x: 0, opacity: 1}} // 제자리에서 나타남
                        transition={{duration: 0.8, type: 'spring', stiffness: 50}} // 스프링 애니메이션
                    >
                        <style.MissionTextTitle>오늘의 미션</style.MissionTextTitle>
                        <style.MissionText>
                            {mission ? mission : "오늘의 미션이 없습니다."}
                        </style.MissionText>
                    </style.MissionWrapper>
                    <ButtonBlue width='60%' height='45px' onClick={() => navigate('/')}>홈으로 돌아가기</ButtonBlue>
                </>
            )}

        </style.TotalWrapper>
    )
}

export default TodayMissionCheck;