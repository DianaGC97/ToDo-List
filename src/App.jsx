import Header from "./components/Header"
import Form from "./components/Form"
import TaskList from "./components/TaskList"
import './index.css'
import { useState } from "react"
import { useEffect } from "react"

function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {
    const getTasksLocalStorage = () => {
      const tasksLocalS = JSON.parse(localStorage.getItem("tasks")) ?? [];
      setTasks(tasksLocalS);
    };
    getTasksLocalStorage();
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [])

  const deleteTask = (id) => {
    const updateTask = tasks.filter(task => task.id !== id);
    setTasks(updateTask)
  }

  return (
    <>
      <Header />
      <Form task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTask={setTask} deleteTask={deleteTask} />
    </>
  )
}

export default App
