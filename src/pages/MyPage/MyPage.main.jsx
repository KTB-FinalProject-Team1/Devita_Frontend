import React, { useState, useEffect } from 'react';
import * as style from './style/MyPage.main';
import { useNavigate } from "react-router-dom";
import CharacterFirst from './CharacterFirst';
import CharacterSecond from './CharacterSecond';
import { getCharacterInfo } from "../../api/GetCharacterInfo";
import moneyImg from '../../assets/img/handMoney.png';

function MyPage() {
    const navigate = useNavigate();
    const user = sessionStorage.getItem("userNickname");

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await getCharacterInfo();
                setExperience(data.experience);
                setVita(data.nutrition);

            }catch(e){
                console.log('api호출실패',e);
            }
        };
        fetchData();
    } ,[])

    const [experience, setExperience] = useState(null);
    const [vita, setVita] = useState(null);
    const level = Math.floor(experience / 100 +1 );
    const currentExperience = experience % 100;
    const growthRate = (currentExperience / 100) * 100;

    const handleClickSetting = () => {
        navigate("/setting");
    };

    const handleGiveVitamin = () => {
        if (vita > 0) {
            setVita(vita - 1);
            setExperience(experience + 10);
        }
    };


    const characterName = level === 1 ? '피곤한 개발자 지망생' : '신입사원 개발자';

    return (
        <style.TotalWrapper>
            <style.Wrapper>
                <style.SubMenuWrapper>
                    <style.SubMenuButton>
                        친구 초대
                    </style.SubMenuButton>
                    <style.SubMenuButton onClick={handleClickSetting}>
                        설정
                    </style.SubMenuButton>
                </style.SubMenuWrapper>
                <style.CharacterNameWrapper>
                    <style.Name>
                        {user}
                    </style.Name>
                    <style.CharacterText>
                        님의 캐릭터
                    </style.CharacterText>
                </style.CharacterNameWrapper>
                <style.CharacterTotalWrapper>
                    {level === 1 ? <CharacterFirst /> : <CharacterSecond />} {/* Conditional rendering */}
                </style.CharacterTotalWrapper>
                <style.CharacterDevelopWrapper>
                    <style.CharacterLevelWrapper>
                        <style.CharacterLevelTitleWrapper>
                            레벨 {level} {characterName}
                            <style.Percent>{growthRate}%</style.Percent>
                        </style.CharacterLevelTitleWrapper>
                        <style.CharacterLevelBar>
                            <style.CharacterLevelBarInner dealt={growthRate} /> {/* Growth rate as percentage */}
                        </style.CharacterLevelBar>
                    </style.CharacterLevelWrapper>
                    <style.CharacterButtonWrapper>
                        <style.CharacterButton onClick={handleGiveVitamin}>
                            <style.CharacterButtonTextWrapper>
                                <style.CharacterButtonTitle>
                                    비타민 주기
                                </style.CharacterButtonTitle>
                                <style.CharacterButtonSubTitle>
                                    {vita} 개 남음
                                </style.CharacterButtonSubTitle>
                            </style.CharacterButtonTextWrapper>
                            <style.CharacterButtonImageWrapper src={moneyImg} />
                        </style.CharacterButton>
                    </style.CharacterButtonWrapper>
                </style.CharacterDevelopWrapper>
            </style.Wrapper>
        </style.TotalWrapper>
    );
}

export default MyPage;