import Task from "./Task";

function TaskList({ tasks = [], setTask, deleteTask }) {
    return (
        <div className="container">
            <h2 className="title-three">Lista de tareas</h2>

            {tasks.map((tarea) => {
                return (
                    <Task key={tarea.id} tarea={tarea} setTask={setTask} deleteTask={deleteTask} />
                )
            })}

        </div>
    )
}

export default TaskList;