import React, { useState, useEffect } from 'react';
import * as style from "./style/AI.main";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import CategoryData from "../../assets/DummyData/Category";
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import { freeMissionGet } from "../../api/FreeMissionGet";

function AIPage() {
    const [selectedTopCategory, setSelectedTopCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [subCategories, setSubCategories] = useState([]);
    const [isGenerated, setIsGenerated ] = useState(false);
    const [freeMissions, setFreeMissions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleTopCategorySelect = (category) => {
        setSelectedTopCategory(category);
        setSelectedSubCategory(null);
        setIsGenerated(false);
    };
    const handleSubCategorySelect = (category) => {
        setSelectedSubCategory(category);
    };
    const handleGenerateButtonClick = async () => {
        if (selectedTopCategory && selectedSubCategory) {
            setIsLoading(true);
            try{
                const response = await freeMissionGet(selectedSubCategory);
                setFreeMissions(response.data);
                setIsGenerated(true);
                setTimeout(()=>{
                    setIsLoading(false);
                }, 2000);
            }catch(error){
                console.log('자율 미션 호출 실패', error);
            }
        }else{
            alert('카테고리를 먼저 선택하세요');
        }
    }
    useEffect(() => {
        if (selectedTopCategory) {
            console.log("Selected Top Category:", selectedTopCategory);
            const selectedCategory = CategoryData.find((item) => item.name === selectedTopCategory);
            setSubCategories(selectedCategory ? selectedCategory.subcategories : []);
        }
    }, [selectedTopCategory]);

    useEffect(() => {
        if (selectedSubCategory) {
            console.log("Selected Sub Category:", selectedSubCategory);
        }
    }, [selectedSubCategory]);
    useEffect(() => {
        if (freeMissions) {
            console.log("Maked free Missions:", freeMissions);
        }
    }, [freeMissions]);


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
                )}{
                    isLoading ? (
                        <div>
                            <p>로딩 중,,,,</p>
                        </div>
                    ): isGenerated ? (
                            <style.MissionWrapper>
                                <style.MissionSelectWrapper>
                                    <ChatBubble position="right" width="80%" height="160px" direction="column" justify="center" align="flex-start">
                                        {freeMissions.map((mission) => (
                                            <style.MissionEachWrapper key={mission.id} level={mission.level} onClick={() => {alert(`${mission.missionTitle} 선택`)}}>
                                                <style.MissionEachText>{mission.missionTitle}</style.MissionEachText>
                                            </style.MissionEachWrapper>
                                        ))}
                                    </ChatBubble>
                                </style.MissionSelectWrapper>
                                <style.MissionSelectButtonWrapper>
                                    <style.MissionRegenerateButton onClick = {()=>{alert('hello')}}>다시 생성하기</style.MissionRegenerateButton>
                                    <style.MissionRegenerateButton onClick = {()=>{alert('hellotwo')}}>투두에 추가하기</style.MissionRegenerateButton>
                                </style.MissionSelectButtonWrapper>
                            </style.MissionWrapper>
                        ):(
                            <div></div>
                        )
            }


            </style.SubAIWrapper>
        </style.TotalWrapper>
    )
}

export default AIPage;