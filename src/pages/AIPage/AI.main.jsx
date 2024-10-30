import React, { useState, useEffect } from 'react';
import * as style from "./style/AI.main";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import CategoryData from "../../assets/DummyData/Category";
import ButtonBlue from "../../components/Buttons/ButtonBlue";

function AIPage() {
    const [selectedTopCategory, setSelectedTopCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [subCategories, setSubCategories] = useState([]);
    const [isGenerated, setIsGenerated ] = useState(false);

    const handleTopCategorySelect = (category) => {
        setSelectedTopCategory(category);
        setSelectedSubCategory(null);
        setIsGenerated(false);
        console.log(selectedTopCategory);
    };
    const handleSubCategorySelect = (category) => {
        setSelectedSubCategory(category);
        console.log(selectedSubCategory);
    };
    const handleGenerateButtonClick = () => {
        if (selectedTopCategory && selectedSubCategory) {
            setIsGenerated(true);
            console.log(selectedTopCategory, selectedSubCategory);
        }else{
            alert('카테고리를 먼저 선택하세요');
        }
    }
    useEffect(() => {
        if (selectedTopCategory) {
            const selectedCategory = CategoryData.find((item) => item.name === selectedTopCategory);
            setSubCategories(selectedCategory ? selectedCategory.subcategories : []);
        }
    }, [selectedTopCategory]);


    return (
        <style.TotalWrapper>
            <style.SubAIWrapper>
                <style.TopCategoryWrapper>
                    <ChatBubble position="left" width="60%" height="20px">
                        분류를 선택해 주세요!
                    </ChatBubble>
                    <style.TopCategorySelectWrapper>
                        <style.TopCategorySelectScroll>

                            {CategoryData.map((item) => (
                                <style.TopCategoryButton onClick={() => handleTopCategorySelect(item.name)}>{item.name}
                                </style.TopCategoryButton>
                            ))}
                        </style.TopCategorySelectScroll>
                    </style.TopCategorySelectWrapper>
                </style.TopCategoryWrapper>
                {selectedTopCategory && (
                    <style.SubCategory>
                        <ChatBubble position="left" width="60%" height="20px">
                            하위 분류를 선택해 주세요!
                        </ChatBubble>
                        <style.SubCategorySelectWrapper>
                            <style.SubCategorySelectScroll>
                                {subCategories.map((subcategory) => (
                                    <style.SubCategoryButton key={subcategory} onClick={() => handleSubCategorySelect(subcategory)}>
                                        {subcategory}
                                    </style.SubCategoryButton>
                                ))}
                            </style.SubCategorySelectScroll>
                        </style.SubCategorySelectWrapper>
                    </style.SubCategory>
                )}
                {selectedSubCategory && (
                    <style.GenerateButtonWrapper>
                        <style.GenerateButton onClick={handleGenerateButtonClick}>
                            미션 생성하기
                        </style.GenerateButton>

                    </style.GenerateButtonWrapper>
                )}
                {isGenerated ? (
                    <style.MissionWrapper>
                        <style.MissionSelectWrapper>
                            <ChatBubble position="right" width="80%" height="160px">{selectedTopCategory}{selectedSubCategory}</ChatBubble>
                        </style.MissionSelectWrapper>
                        <style.MissionSelectButtonWrapper>
                            <style.MissionRegenerateButton onClick = {()=>{alert('hello')}}>다시 생성하기</style.MissionRegenerateButton>
                            <style.MissionRegenerateButton onClick = {()=>{alert('hellotwo')}}>투두에 추가하기</style.MissionRegenerateButton>
                        </style.MissionSelectButtonWrapper>
                    </style.MissionWrapper>
                ):(
                    <div>
                        <p>로딩중</p>
                    </div>
                    )}

            </style.SubAIWrapper>
        </style.TotalWrapper>
    )
}

export default AIPage;