import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as style from "./style/AI.main";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import CategoryData from "../../assets/DummyData/Category";
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import { getFreeMission } from "../../api/GetFreeMission";
import { postSetFreeMission } from "../../api/PostSetFreeMission";
import bellImg from "../../assets/img/bell.png";

function AIPage() {
    const [selectedTopCategory, setSelectedTopCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [subCategories, setSubCategories] = useState([]);
    const [isGenerated, setIsGenerated] = useState(false);
    const [freeMissions, setFreeMissions] = useState([]);
    const [selectedMission, setSelectedMission] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const exampleData = [
        { "level": 1, "missionTitle": "level1111" },
        { "level": 2, "missionTitle": "레벨 2222" },
        { "level": 3, "missionTitle": "레벨 3333" }
    ];

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
            try {
                const response = await getFreeMission(selectedSubCategory);
                setFreeMissions(response.data);
                setIsGenerated(true);
            } catch (error) {
                setFreeMissions(exampleData);
                setIsGenerated(true);
                console.log('자율 미션 호출 실패', error);
            } finally {
                setTimeout(() => setIsLoading(false), 2000);
            }
        } else {
            alert('카테고리를 먼저 선택하세요');
        }
    };

    const handleMissionClick = (mission) => {
        setSelectedMission(mission);
    };

    const handleMissionAdd = async () => {
        if (selectedMission) {
            try {
                await postSetFreeMission(selectedMission.missionTitle);
                alert('미션이 성공적으로 추가되었습니다!');
                navigate('/');
            } catch (error) {
                console.error('미션 추가 실패:', error);
            }
        } else {
            alert('먼저 미션을 선택하세요');
        }
    };

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
                                <style.TopCategoryButton
                                    key={item.id}
                                    onClick={() => handleTopCategorySelect(item.name)}
                                    selected={selectedTopCategory === item.name}
                                >
                                    {item.name}
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
                                {subCategories.map((item) => (
                                    <style.SubCategoryButton
                                        key={item.id}
                                        onClick={() => handleSubCategorySelect(item)}
                                        selected={selectedSubCategory === item}
                                    >
                                        {item}
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
                {isLoading ? (
                    <style.LoadingWrapper>
                        <style.LoadingText>로딩중...</style.LoadingText>
                        <style.LoadingImg src={bellImg} />
                    </style.LoadingWrapper>
                ) : isGenerated ? (
                    <style.MissionWrapper>
                        <style.MissionSelectWrapper>
                            <ChatBubble position="right" width="80%" height="160px" direction="column" justify="center" align="flex-start">
                                {freeMissions.map((mission) => (
                                    <style.MissionEachWrapper
                                        key={mission.id}
                                        level={mission.level}
                                        selected = {selectedMission && selectedMission=== mission}
                                        onClick={() => handleMissionClick(mission)}
                                    >
                                        <style.MissionEachText>{mission.missionTitle}</style.MissionEachText>
                                    </style.MissionEachWrapper>
                                ))}
                            </ChatBubble>
                        </style.MissionSelectWrapper>
                        <style.MissionSelectButtonWrapper>
                            <style.MissionRegenerateButton onClick={handleGenerateButtonClick}>
                                다시 생성하기
                            </style.MissionRegenerateButton>
                            <style.MissionRegenerateButton onClick={handleMissionAdd}>
                                투두에 추가하기
                            </style.MissionRegenerateButton>
                        </style.MissionSelectButtonWrapper>
                    </style.MissionWrapper>
                ) : (
                    <div></div>
                )}
            </style.SubAIWrapper>
        </style.TotalWrapper>
    );
}

export default AIPage;