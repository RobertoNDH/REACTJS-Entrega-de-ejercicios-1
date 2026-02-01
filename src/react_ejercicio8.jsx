import {useState} from "react";

const Ejercicio8 = () => {
    const [text, setText] = useState("");

    const charCount = text.replace(/\s/g, "").length;

    const wordCount = text.trim() == "" ? 0 : text.trim().split(/\s+/).length;

    return (
        <div>
            <h1>Contador de Palabras y Caracteres</h1>

            <p>Escribe tu parrafo aqui debajo:</p>
            <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>

            <div>
                <span>Palabras:</span>
                <span>{wordCount}</span>
            </div>
            <div>
                <span>Caracteres:</span>
                <span>{charCount}</span>
            </div>
        </div>
    )
}

export default Ejercicio8;