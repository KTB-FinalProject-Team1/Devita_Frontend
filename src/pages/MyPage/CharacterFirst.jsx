import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img/developer1.png';
import img2 from '../../assets/img/developer2.png';
import img3 from '../../assets/img/developer3.png';

const CharacterAnimation = () => {

    const frames = [
        img1,
        img2,
        img3,
    ];

    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
        }, 250);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <img src={frames[currentFrame]} width='150px' height='250px' />
    );
}

export default CharacterAnimation;