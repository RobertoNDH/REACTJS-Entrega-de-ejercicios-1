import {useState} from "react";

const Ejercicio2 = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Clics: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Contar clics</button>



        </div>
    )
}

export default Ejercicio2;