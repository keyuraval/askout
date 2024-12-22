import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [page, setPage] = useState(1);
    const [song] = useState(new Audio('./song.mp3'));

    const startMusic = () => {
        song.play();
        song.loop = true;
    };

    const stopMusic = () => {
        song.pause();
        song.currentTime = 0;
    };

    const confirmDate = async () => {
        stopMusic();
        await fetch('/api/confirm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ confirmation: 'Yes, I will join!' })
        });
        alert('Date confirmed!');
    };

    return (
        <div className="app" onClick={startMusic}>
            {page === 1 && (
                <div className="page">
                    <button className="btn" onClick={() => setPage(2)}>Start</button>
                </div>
            )}

            {page === 2 && (
                <div className="page">
                    <h1>Will you tell anyone? 🐒</h1>
                    <button className="btn" onClick={() => setPage(3)}>No, I won’t :)</button>
                </div>
            )}

            {page === 3 && (
                <div className="page">
                    <h1>Secret? ☕ Wanna join for coffee?</h1>
                    <button className="btn" onClick={confirmDate}>Yes, of course!</button>
                    <button className="btn" onClick={() => alert('Maybe next time :(')}>No</button>
                </div>
            )}
        </div>
    );
};

export default App;