import {useState} from "react";

const Ejercicio4 = () => {
    const [inputValue, setInputValue] = useState("");
    
    const animals = ["Perro", "Gato", "Pez"];

    const list = animals.filter((animal) => 
        animal.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
        <div>
            <h1>Filtro de Búsqueda</h1>

            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

            <ul>
                {list.length > 0 ? (
                    list.map((animal, index) => (
                        <li key={index}>
                            {animal}
                        </li>
                    ))
                ) : (
                    <li>No se encontraron coincidencias!</li>
                )}
            </ul>
        </div>
    )
}

export default Ejercicio4;