import {useState, useEffect} from "react";

const Ejercicio6 = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning])

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    return (
        <div>
            <h1>Temporizador</h1>

            <div>{formatTime(time)}</div>

            <div>
                {!isRunning ? (
                    <button onClick={() => setIsRunning(true)}>Iniciar</button>
                ) : (
                    <button onClick={() => setIsRunning(false)}>Pausar</button>
                )}

                <button onClick={() => {
                    setIsRunning(false);
                    setTime(0);
                }}>Reiniciar</button>
            </div>
        </div>
    )
}

export default Ejercicio6;

