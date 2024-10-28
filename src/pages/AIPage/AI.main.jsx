import React, { useState } from 'react';
import * as style from "./style/AI.main";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import CategoryData from "../../assets/DummyData/Category";


function AIPage() {
    const [selectedTopCategory, setSelectedTopCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
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

    const selectedCategory = CategoryData.find((item) => item.name == selectedTopCategory);
    const subCategories  = selectedCategory ? selectedCategory.subcategories : [];

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
                        <button onClick={() => handleSubCategorySelect('SubCategory1')}>SubCategory 1</button>
                        <button onClick={() => handleSubCategorySelect('SubCategory2')}>SubCategory 2</button>
                        <button onClick={() => handleSubCategorySelect('SubCategory3')}>SubCategory 3</button>
                    </style.SubCategory>
                )}
                {selectedSubCategory && (
                    <style.GenerateButtonWrapper>
                        <style.GenerateButton onClick={handleGenerateButtonClick}>
                            미션 생성하기
                        </style.GenerateButton>
                    </style.GenerateButtonWrapper>
                )}
                {isGenerated && (
                    <style.MissionWrapper>
                        <style.MissionSelectWrapper>
                            <p>미션 생성 {selectedTopCategory} {selectedSubCategory} 기반!</p>
                        </style.MissionSelectWrapper>
                        <style.MissionSelectButtonWrapper>
                            <button>Mission Action 1</button>
                            <button>Mission Action 2</button>
                        </style.MissionSelectButtonWrapper>
                    </style.MissionWrapper>
                )}

            </style.SubAIWrapper>
        </style.TotalWrapper>
    )
}

export default AIPage;