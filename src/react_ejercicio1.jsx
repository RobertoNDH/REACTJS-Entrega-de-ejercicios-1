import { useState, useEffect } from "react";

const Ejercicio1 = () => {
    const [backgroundColor, setBackgroundColor] = useState("rgb(240, 240, 240)");

    const generateRandomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }

    const handleColorChange = () => {
        const r = generateRandomNumber(256);
        const g = generateRandomNumber(256);
        const b = generateRandomNumber(256);

        const newColor = `rgb(${r}, ${g}, ${b})`;

        setBackgroundColor(newColor);
    }

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor;
    })

    const containerStyle = {
        backgroundColor: backgroundColor,
    }

    return (
        <div style={containerStyle}>
            <h1>Cambiador de Color de Fondo</h1>
            <button onClick={handleColorChange}>Cambiar Fondo</button>
        </div>
    )
}

export default Ejercicio1;