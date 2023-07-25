import React from 'react'
import Title from '../../Components/Title/Title'
import Task from '../../Components/Task/Task'
import Add from '../../Components/Add/Add'
import { useContext, useEffect, useState } from 'react'
import { ContextData } from '../../App'

const TodoList = () => {
  const [todoData, setTodoData] = useContext(ContextData)
  const [animateStartRender, setAnimateStartRender] = useState(false)

  const deletedTask = index => {
    setTimeout(() => {
      const filteredTasks = todoData.filter((item, id) => index !== id)
      setTodoData(filteredTasks)
      localStorage.setItem('tasks', JSON.stringify(filteredTasks))
    }, 800)
  }

  useEffect(() => {
    // При каждом монтировании компонента, пытаемся загрузить данные из localStorage
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTodoData(JSON.parse(savedTasks))
    }
    setAnimateStartRender(prev => (prev = true))

    console.log(todoData)
  }, [])
  return (
    <div
      className={`${
        setAnimateStartRender ? 'animate__animated animate__fadeIn' : ''
      } bg-zinc-700 h-full px-5 rounded-lg pb-5 flex flex-col transition-all`}
    >
      <Title>My ToDo List</Title>
      <div className='flex flex-col transition-all flex-wrap'>
        {todoData.map((todo, index) => (
          <Task
            key={todo.id}
            title={todo.title}
            body={todo.body}
            category={todo.category}
            date={todo.date}
            bgColor={todo.color}
            editTaskClick={todo}
            deleteTask={() => {
              deletedTask(index)
            }}
          />
        ))}
      </div>
      <Add />
    </div>
  )
}

export default TodoList
