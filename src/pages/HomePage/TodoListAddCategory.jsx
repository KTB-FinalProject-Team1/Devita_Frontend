import React, { useState } from 'react';
import * as style from './style/TodoListAddModal'; // 동일한 스타일 사용 가능
import ButtonBlue from "../../components/Buttons/ButtonBlue";

const AddCategoryModal = ({ isOpen, onClose, categories, setCategories }) => {
    const [newCategoryName, setNewCategoryName] = useState('');
    const [newCategoryColor, setNewCategoryColor] = useState('#CCCCCC');

    if (!isOpen) return null;

    const handleAddCategory = () => {
        if (newCategoryName.trim()) {
            const newCategory = {
                name: newCategoryName,
                color: newCategoryColor,
            };
            console.log(newCategory);
            setCategories([...categories, newCategory]);
            setNewCategoryName('');
            setNewCategoryColor('#CCCCCC');
            onClose();
        }
    };

    return (
        <style.OverLay>
            <style.ModalWrapper>
                <h2>Add New Category</h2>
                <style.InputWrapper>
                    <style.Input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        placeholder="Category Name"
                    />
                    <input
                        type="color"
                        value={newCategoryColor}
                        onChange={(e) => setNewCategoryColor(e.target.value)}
                    />
                    <button onClick={handleAddCategory}>Add Category</button>
                    <button onClick={onClose}>Cancel</button>
                </style.InputWrapper>
            </style.ModalWrapper>
        </style.OverLay>
    );
};

export default AddCategoryModal;