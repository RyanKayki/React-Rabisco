import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Titulo(props) {
    const [completed, setCompleted] = useState(false);
    const [showBlinking, setShowBlinking] = useState(false);

    const handleDone = () => {
        setCompleted(true)
        setTimeout(() => setShowBlinking(true), 500)
        console.log('Loop completed!')
    };

    const handleType = (count) => {
        console.log(`Typing: ${count}`)
    };

    return (
        <h1 className='display-5 text-success text-center mt-4 mb-5 fs-1'>
                <Typewriter
                    words={['Por Favor, Aguerde Estamos Buscando o Produto...']}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                />
        </h1>
    )
}
