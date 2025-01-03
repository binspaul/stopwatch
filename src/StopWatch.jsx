import { useState } from "react";

const StopWatch = () => {
    let [pauseTimer, setPauseTimer] = useState(true);
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [hours, setHours] = useState(0);
    
    function startTimer() {
        setPauseTimer(false);
    };

    function stopTimer() {
        setPauseTimer(true);
    }
    
    setTimeout(() => {
        let s = seconds;
        let m = minutes;
        let h = hours;

        if (pauseTimer == true) return;

        setSeconds((++s));
        
        if (s > 59) {
            setMinutes(++m);
            setSeconds(0);
        }

        if (m > 59) {
            setHours(++h);
            setMinutes(0);
            setSeconds(0);
        }

        if (h > 23) {
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        }
    }, 100);

    return (
        <>
            <h3>{hours} : {minutes} : {seconds}</h3>
            <br/>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </>
    )
};

export default StopWatch;