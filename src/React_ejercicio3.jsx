import {useState} from "react";

const Ejercicio3 = () => {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        if (inputValue.trim() === "") return;

        const newItem = {
            id: Date.now(),
            text: inputValue,
        }

        setItems([...items, newItem]);
        setInputValue("");
    }

    const handleDeleteItem = (id) => {
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
    }

    return (
        <div>
            <h1>Lista Dinamica</h1>

            <input type="text" value={inputValue} onChange={
                (e) => setInputValue(e.target.value)
            } />

            <button onClick={handleAddItem}>
                Agregar
            </button>

            <ul>{items.map((item) => (
                <li key={item.id}>
                    <p>{item.text}</p>
                    <button onClick={() => 
                        handleDeleteItem(item.id)
                    }>Eliminar</button>
                </li>
            ))}</ul>
        </div>
    )
}

export default Ejercicio3;