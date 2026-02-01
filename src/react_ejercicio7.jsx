import {useState} from "react";

const Ejercicio7 = () => {
    const [length, setLength] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const generatePassword = () => {
        setError("");
        setPassword("");

        if (length === "" || Number(length) < 4) {
            setError("La longitud debe ser mayor o igual a 4!");
            return
        }

        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let newPassword = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            newPassword += charset[randomIndex];
        }

        setPassword(newPassword);
    }

    return (
        <div>
            <h1>Generador de Contraseña</h1>

            <div>
                <label>Longitud de la contraseña:</label>
                <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
                <button onClick={generatePassword}>Generar Contraseña</button>
            </div>

            {error && (
                <h3>{error}</h3>
            )}

            {password && (
                <div>
                    <p>Tu contraseña segura:</p>
                    <strong>{password}</strong>
                </div>
            )}
        </div>
    )
}

export default Ejercicio7;