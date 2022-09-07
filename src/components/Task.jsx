
const Task = ({ tarea = [], setTask, deleteTask }) => {

    const { title, date, description, id } = tarea;

    const handleEliminar = () => {
        const respuesta = confirm("¿Desea eliminar esta tarea?")
        if (respuesta) {
            deleteTask(id)
        }
    }

    return (
        <div className="container-two">
            <p className="parrafo">Titulo:{title ? title : ''}</p>
            <p className="parrafo">Fecha:{date ? date : ""}</p>
            <p className="parrafo">Descripcion:{description ? description : ""}</p>

            <div className="buttons">
                <button className="button-two" type="button" onClick={() => setTask(tarea)}>Editar</button>
                <button className="button-three" type="button" onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    )
}

export default Task;