import React, { useState } from 'react';
import * as style from './style/TodoListAddModal'; // 동일한 스타일 사용 가능
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import { addCategory } from "../../api/AddCategory";
import { fetchCategories } from "../../store/categoriesSlice";
import {ColorInput} from "./style/TodoListAddModal";
import { useDispatch } from 'react-redux';

const AddCategoryModal = ({ isOpen, onClose, categories, setCategories }) => {
    const [newCategoryName, setNewCategoryName] = useState('');
    const [newCategoryColor, setNewCategoryColor] = useState('#CCCCCC');
    const dispatch = useDispatch();

    if (!isOpen) return null;

    const handleAddCategory = async () => {
        if (newCategoryName.trim()) {
            const newCategory = {
                name: newCategoryName,
                color: newCategoryColor,
            };
            console.log(newCategory);
            try{
                const response = await addCategory(newCategoryName, newCategoryColor);
                console.log('카테고리 추가 성공', response);
                await dispatch(fetchCategories());
                setNewCategoryName('');
                setNewCategoryColor('#CCCCCC');
                onClose();
            } catch(error){
                console.log("카테고리 추가 실패:", error.message, newCategoryName, newCategoryColor);

            }


        }
    };

    return (
        <style.OverLay>
            <style.ModalWrapper>
                <style.TopButtonWrapper>
                    <div></div>
                    <style.ExitButton onClick={onClose}>x</style.ExitButton>
                </style.TopButtonWrapper>


                <style.InputWrapperCategory>
                    <style.Input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        placeholder="Category Name"
                    />
                    <ColorInput
                        type="color"
                        value={newCategoryColor}
                        onChange={(e) => setNewCategoryColor(e.target.value)}
                    />
                </style.InputWrapperCategory>
                <ButtonBlue onClick={handleAddCategory} width='80%' >Add Category</ButtonBlue>
            </style.ModalWrapper>
        </style.OverLay>
    );
};

export default AddCategoryModal;