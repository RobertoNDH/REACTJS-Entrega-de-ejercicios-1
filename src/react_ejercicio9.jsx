import {useState, useEffect} from "react";

const Ejercicio9 = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("mis_tareas");
        return savedTasks ? JSON.parse(savedTasks) : [];
    })

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        localStorage.setItem("mis_tareas", JSON.stringify(tasks));
    }, [tasks])

    const addTask = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;

        const newTask = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        }

        setTasks([...tasks, newTask]);
        setInputValue("");
    }

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed } : task
        ))
    }

    const clearCompleted = () => {
        setTasks(tasks.filter(task => !task.completed));
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>

            <form onSubmit={addTask}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">Añadir</button>
            </form>    

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
                        {task.text}
                    </li>
                ))}
            </ul>

            {tasks.length > 0 && (
                <button onClick={clearCompleted}>Limpiar Completados</button>
            )}
        </div>
    )
}

export default Ejercicio9;