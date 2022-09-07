import { useState, useEffect } from "react";
import AlertError from "./AlertError";

function Form({ task, setTask, tasks, setTasks }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(task).length > 0) {
            setTitle(task.title);
            setDate(task.date);
            setDescription(task.description);
        }
    }, [task]);

    const generarId = () => {
        const id = Math.random().toString(20).substr(2);
        return id;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([title, date, description].includes('')) {
            setError(true)
            return;
        }
        setError(false);

        //Objeto Tareas
        const objTask = {
            title,
            date,
            description
        }

        if (task.id) {
            //Editando Tarea
            const tareasActualizadas = tasks.map(taskState => taskState.id === task.id ? objTask : taskState);
            setTasks(tareasActualizadas)
            setTask({});

        } else {
            //Nueva Tarea
            objTask.id = generarId();
            setTasks([...tasks, objTask]);
        }

        setTitle('');
        setDate('');
        setDescription('');
    };

    return (
        <div className="container">
            <h2 className="title-three">Establecer Tareas</h2>

            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label htmlFor="titulo" className="label"> Titulo</label>
                    <input type="text" id="titulo" className="input" placeholder="Titulo de la tarea" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <br />

                <div>
                    <label htmlFor="fecha" className="label"> Fecha</label>
                    <input type="date" id="fecha" className="input" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <br />

                <div>
                    <label htmlFor="descripcion" className="label">Descripcion</label>
                    <textarea type="text" id="descripcion" className="textarea" placeholder="Descripcion de la tarea" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <br />

                {!task.id ? (
                    <input type="submit" className="button" value="Crear Tarea" />
                ) : (
                    <input type="submit" className="btton" value="Actualizar Tarea" />
                )}

                <br />
                {error && <AlertError><p>Todos los campos son obligatorios</p></AlertError>}
            </form>
        </div >
    )
}

export default Form;