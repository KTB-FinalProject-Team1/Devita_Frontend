import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as style from './style/TodoListAddModal';

const TodoListAddModal = ({
                              isOpen,
                              onClose,
                              onSubmit,
                              inputValue,
                              setInputValue,
                              category,
                              setCategory,
                              setColor,
                              categories,
                              onOpenCategoryModal
                          }) => {
    const handleAdd = () => {
        if (inputValue.trim() && category.trim()) {
            onSubmit(inputValue, category);
            setInputValue('');
            setCategory('');
        }
    };

    const modalVariants = {
        hidden: { y: '100vh', opacity: 0 }, // 화면 하단에서 시작
        visible: { y: 0, opacity: 1 }, // 화면에 보이는 상태
        exit: { y: '100vh', opacity: 0 }, // 다시 화면 아래로 내려가면서 사라짐
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <style.OverLay>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                        transition={{ duration: 0.5, ease: 'easeInOut' }} // 애니메이션 시간 및 타이밍 함수 설정
                    >
                        <style.ModalWrapper>
                            <style.InputWrapper>
                                <style.Input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="할 일을 적어주세요"
                                />
                            </style.InputWrapper>

                            <div>
                                {categories.map((category) => (
                                    <button
                                        key={category.name}
                                        onClick={() => {
                                            setCategory(category.name);
                                            setColor(category.color);
                                        }}
                                        style={{
                                            backgroundColor: category.color,
                                            margin: '5px',
                                            border: 'none',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            color: '#fff',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>

                            <button onClick={handleAdd}>Add</button>
                            <button onClick={onClose}>Cancel</button>
                            <button onClick={onOpenCategoryModal}>
                                Add New Category
                            </button>
                        </style.ModalWrapper>
                    </motion.div>
                </style.OverLay>
            )}
        </AnimatePresence>
    );
};

export default TodoListAddModal;