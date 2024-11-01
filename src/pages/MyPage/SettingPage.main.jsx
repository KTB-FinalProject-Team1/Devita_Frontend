import React from 'react';
import * as style from './style/SettingPage.main';
import { useNavigate } from "react-router-dom";


function SettingPage() {
    const navigate = useNavigate();


    return(

        <style.TotalWrapper>
            <style.Wrapper>
                <style.ChangeWrapper
                    onClick={() => {
                        navigate(-1);
                    }}>
                    <style.ChangeTitle>
                        닉네임 변경
                    </style.ChangeTitle>
                    <style.ChangeTitle>{'>'}</style.ChangeTitle>
                </style.ChangeWrapper>
                <style.ChangeWrapper
                    onClick={() => {
                        navigate(-1);
                    }}>
                    <style.ChangeTitle>
                        개발 역량 설정
                    </style.ChangeTitle>
                    <style.ChangeTitle>{'>'}</style.ChangeTitle>
                </style.ChangeWrapper>


            </style.Wrapper>
        </style.TotalWrapper>
    )
}

export default SettingPage;