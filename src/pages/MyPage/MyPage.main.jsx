import React from 'react';
import * as style from './style/MyPage.main';
import { useNavigate } from "react-router-dom";
import CharacterFirst from './CharacterFirst';

function MyPage() {
    const navigate = useNavigate();
    const handleClickSetting = () => {
        navigate("/setting");
    };

    return(

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
                        한주리
                    </style.Name>
                    <style.CharacterText>
                        님의 캐릭터
                    </style.CharacterText>
                </style.CharacterNameWrapper>
                <style.CharacterTotalWrapper>
                    <CharacterFirst/>
                </style.CharacterTotalWrapper>
                <style.CharacterDevelopWrapper>
                    <style.CharacterLevelWrapper>
                        <style.CharacterLevelTitleWrapper>
                            레벨 { 5 } {'자라나무'}
                            <style.Percent>{50}%</style.Percent>
                        </style.CharacterLevelTitleWrapper>
                        <style.CharacterLevelBar>
                            <style.CharacterLevelBarInner dealt={50}/>
                        </style.CharacterLevelBar>
                    </style.CharacterLevelWrapper>
                    <style.CharacterButtonWrapper>
                        <style.CharacterButton>
                            <style.CharacterButtonTextWrapper>
                                <style.CharacterButtonTitle>
                                    영양제 주기
                                </style.CharacterButtonTitle>
                                <style.CharacterButtonSubTitle>
                                    {0} 개 남음
                                </style.CharacterButtonSubTitle>
                            </style.CharacterButtonTextWrapper>
                            <style.CharacterButtonImageWrapper></style.CharacterButtonImageWrapper>
                        </style.CharacterButton>
                        <style.CharacterButton>
                            <style.CharacterButtonTextWrapper>
                                <style.CharacterButtonTitle>
                                    영양제 주기
                                </style.CharacterButtonTitle>
                                <style.CharacterButtonSubTitle>
                                    {0} 개 남음
                                </style.CharacterButtonSubTitle>
                            </style.CharacterButtonTextWrapper>
                            <style.CharacterButtonImageWrapper></style.CharacterButtonImageWrapper>
                        </style.CharacterButton>

                    </style.CharacterButtonWrapper>
                </style.CharacterDevelopWrapper>
            </style.Wrapper>
        </style.TotalWrapper>
    )
}

export default MyPage;