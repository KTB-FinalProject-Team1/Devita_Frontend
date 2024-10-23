// src/pages/HomePage/TodoListAddModal.jsx

import React from 'react';

const TodoListAddModal = ({ isOpen, onClose, onSubmit, inputValue, setInputValue, category, setCategory, setColor}) => {
    if (!isOpen) return null;

    const categoryColors = {
        Work: '#FFA7A7',
        'AI 생성!': '#7DB1FF',
        '강제 미션!': '#086BFF',
        Shopping: '#FFCD68',
        Others: '#6FFFCF',
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setColor(categoryColors[selectedCategory]);
    }


    const handleAdd = () => {
        if (inputValue.trim() && category.trim()) {
            onSubmit(inputValue, category);
            setInputValue('');
            setCategory('');
        }
    };

    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.modal}>
                <h2>Add a To-Do</h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="할 일을 적어주세요"
                />
                <select
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <option value="">카테고리를 선택하세요</option>
                    <option value="Work">Work</option>
                    <option value="AI 생성!">AI 생성!</option>
                    <option value="강제 미션!">강제 미션!</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Others">Others</option>
                </select>
                <button onClick={handleAdd}>Add</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    modal: {
        width: '100%',
        maxWidth: '410px',
        height: '45%',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'center',
    },
};

export default TodoListAddModal;