import { useState, useRef } from "react";

export default function TimerChallenge({title, targetTime}) {
    
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timer = useRef();

    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {setTimerExpired(true); setTimerStarted(false);}, targetTime * 1000);
    }
    function handleStop() {
        clearTimeout(timer.current);
        setTimerExpired(true); 
        setTimerStarted(false);
    }

    return(
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost</p>}

            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {!timerStarted ? 'Start' : 'Stop'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Timer is running' : 'Timer inactive'}
            </p>

        </section>
    );
}