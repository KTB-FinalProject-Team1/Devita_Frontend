import React, { useState } from 'react';
import * as style from './style/Onboarding.main';
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import { useNavigate } from "react-router-dom";
import CategoryData from "../../assets/DummyData/Category";
import { settingStack } from "../../api/PutSettingStack";


function OnboardingStack(){
    const [subCategories, setSubCategories] = useState(CategoryData);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const navigate = useNavigate();
    const handleSubCategoryClick = (subcategory) => {
        setSelectedSubCategories((prevSelected) => {
            if(prevSelected.includes(subcategory)){
                return prevSelected.filter((item)=> item !== subcategory);
            }else{
                return [...prevSelected, subcategory];
            }
        })
    };
    const handleConfirmClick = async ()=>{
        console.log('사용자가 고른 스택',selectedSubCategories);
        try {
            await settingStack(selectedSubCategories); // 선택한 카테고리를 API에 전송
            console.log("스택 설정 완료되었습니다.");
            navigate('/'); // 성공적으로 설정 후 페이지 이동
        } catch (error) {
            console.error("스택 설정 중 오류 발생:", error);
            alert("스택 설정에 실패했습니다. 다시 시도해주세요.");
        }

    };

    return (
        <style.TotalWrapper>
            <style.Wrapper>
                <style.TitleWrapperStack>
                    <style.Title>관심 개발 분야를 </style.Title>
                    <style.Title>골라 주세요!</style.Title>
                </style.TitleWrapperStack>
                <style.StackTotalWrapper>
                    {CategoryData.map((category) => (
                        <style.StackWrapper key={category.name}>
                            <style.StackMainCategory>
                                {category.name} {/* Category Name */}
                            </style.StackMainCategory>
                            <style.StackSubCategoryWrapper>
                                {category.subcategories.map((subcategory) => (
                                    <style.SubCategoryButton key={subcategory} onClick={() => handleSubCategoryClick(subcategory)} isSelected={selectedSubCategories.includes(subcategory)}>
                                        {subcategory} {/* Subcategory Name */}
                                    </style.SubCategoryButton>
                                ))}
                            </style.StackSubCategoryWrapper>
                        </style.StackWrapper>
                    ))}
                </style.StackTotalWrapper>

                <ButtonBlue width={'90%'} height={'50px'} onClick={handleConfirmClick}>확인</ButtonBlue>
            </style.Wrapper>
        </style.TotalWrapper>
    )
}

export default OnboardingStack;