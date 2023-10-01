import React, { useState } from 'react';

const colors = ["Orange", "Green", "Blue"];

function DiceRoller() {
    const [color, setColor] = useState("");
    const [rolling, setRolling] = useState(false);

    const rollDice = () => {
        setRolling(true);
        // Play the dice roll sound
        const audioEl = document.getElementById('rollSound');
        audioEl.play();
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * colors.length);
            setColor(colors[randomIndex]);
            setRolling(false);
        }, 1000); // 1-second delay to simulate rolling
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Color Dice Roller</h1>
            <button onClick={rollDice} disabled={rolling}>
                {rolling ? "Rolling..." : "Roll the Dice"}
            </button>
            {rolling ? (
                <img src="/rolling_dice.gif" alt="Rolling Dice" width="800" />
            ) : color ? (
                <h2>
                    The dice rolled: <span style={{ color }}>{color}</span>
                </h2>
            ) : null}
            {/* Audio element to play the roll sound */}
            <audio id="rollSound" src="/roll_sound.mp3" preload="auto"></audio>
        </div>
    );
}

export default DiceRoller;


