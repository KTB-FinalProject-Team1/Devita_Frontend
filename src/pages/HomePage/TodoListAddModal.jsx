import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as style from './style/TodoListAddModal';
import ButtonBlue from '../../components/Buttons/ButtonBlue';


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
                              selectedDate,
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
                            <style.TopButtonWrapper>
                                <style.CategoryChangeButton onClick={onOpenCategoryModal}>카테고리 설정</style.CategoryChangeButton>
                                <style.ExitButton onClick={onClose}>x</style.ExitButton>

                            </style.TopButtonWrapper>
                            <style.InputWrapper>
                                <style.Input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="할 일을 적어주세요"
                                />
                            </style.InputWrapper>

                            <style.CategoryButtonWrapper>
                                <style.CategoryButtonScrollWrapper>
                                    {categories.map((item) => (
                                        <style.CategoryButton
                                            key={item.name}
                                            onClick={() => {
                                                setCategory(item.name);
                                                setColor(item.color);
                                            }}
                                            color={item.color}
                                            isSelected={category === item.name}
                                        >
                                            {item.name}
                                        </style.CategoryButton>
                                    ))}
                                </style.CategoryButtonScrollWrapper>
                            </style.CategoryButtonWrapper>

                            <ButtonBlue width="80%" height="40px" onClick={handleAdd}>Add Todo</ButtonBlue>
                        </style.ModalWrapper>
                    </motion.div>
                </style.OverLay>
            )}
        </AnimatePresence>
    );
};

export default TodoListAddModal;