import React, { useContext, useEffect, useState } from 'react'
import { ContextData } from '../../App'
import { Checkbox } from 'antd'
import { Link } from 'react-router-dom'

const Task = ({ title, body, category, date, deleteTask, bgColor, editTaskClick }) => {
  const [taskData, setTaskData] = useContext(ContextData)
  const [taskDeleteAnimate, setTaskDeleteAnimate] = useState(false)

  const animateDelete = () => {
    setTaskDeleteAnimate((prev) => (prev = true))
  }

  return (
    <div
      className={`p-4 rounded-md bg-zinc-800 mb-5 relative ${
        taskDeleteAnimate ? 'animate__animated animate__fadeOutLeft' : ''
      }`}
      style={{ background: `${bgColor}` }}
    >
      <h2 className='text-2xl font-semibold mb-4 text-zinc-50'>{title}</h2>
      <p className='mb-4 text-zinc-50'>{body}</p>
      <p className='mb-4 text-zinc-50'>Category: {category}</p>
      <p className='font-thin mb-4 text-zinc-50'>{date}</p>
      <Checkbox onClick={animateDelete} onChange={deleteTask} />
      <Link
        to={'/edit-todo'}
        state={editTaskClick}
        className='text-zinc-50 absolute top-3 right-3 cursor-pointer font-thin'
      >
        edit &#9998;
      </Link>
    </div>
  )
}

export default Task
