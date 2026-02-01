import {useState} from "react";

const Ejercicio5 = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState("");

    const calcular = (operacion) => {
        setError("");
        setResultado(null);

        if (num1 === "" || num2 === "") {
            setError("Por favor, introduce ambos numeros.");
            return
        }

        const n1 = Number(num1);
        const n2 = Number(num2);

        switch (operacion) {
            case "sumar":
                setResultado(n1 + n2);
                break
            case "restar":
                setResultado(n1 - n2);
                break
            case "multiplicar":
                setResultado(n1 * n2);
                break
            case "dividir":
                if (n2 === 0) {
                    setError("No se puede dividir por 0!");
                } else {
                    setResultado(n1 / n2);
                }
                break
            default:
                break
        }
    }

    return (
        <div>
            <h1>Calculadora Sencilla</h1>

            <div>
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />

                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />

                <div>
                    <button onClick={() => calcular("sumar")}>Sumar</button>
                    <button onClick={() => calcular("restar")}>Restar</button>
                    <button onClick={() => calcular("multiplicar")}>Multiplicar</button>
                    <button onClick={() => calcular("dividir")}>Dividir</button>
                </div>
            </div>

            {error && <h3>{error}</h3>}

            {resultado !== null && (
                <h3>Resultado: {resultado}</h3>
            )}
        </div>
    )
}

export default Ejercicio5;

