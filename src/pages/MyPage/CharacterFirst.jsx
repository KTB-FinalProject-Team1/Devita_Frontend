import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img/sleepy11.png';
import img2 from '../../assets/img/sleepy22.png';
import img3 from '../../assets/img/sleepy33.png';
import img4 from '../../assets/img/sleeply44.png'

const CharacterAnimation = () => {

    const frames = [
        img1,
        img2,
        img3,
        img4,
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
        <img src={frames[currentFrame]} width='210px' height='240px' />
    );
}

export default CharacterAnimation;