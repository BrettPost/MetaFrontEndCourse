import React from 'react';

function BirdSound() {
    const bird = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    );

    var toggle = () => {
        if (bird.paused) {
            bird.play();
        }
        
    }

    return (
        <button onClick={toggle}>Click me</button>
    );
}

export default BirdSound;