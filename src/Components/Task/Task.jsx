import React, { useContext, useEffect, useState } from 'react'
import { ContextData } from '../../App'
import { Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import Favorites from '../Favorites/Favorites'

const Task = ({ title, body, category, date, deleteTask, editTaskClick }) => {
  const [taskData, setTaskData] = useContext(ContextData)
  const [taskDeleteAnimate, setTaskDeleteAnimate] = useState(false)
  const [activeStar, setActiveStar] = useState()

  const handlerCLickActiveStar = () => {
    setActiveStar(prev => !prev)
  }

  const animateDelete = () => {
    setTaskDeleteAnimate(true)
  }

  return (
    <div
      className={`p-4 rounded-md transition-all bg-zinc-800 mb-5 relative ${taskDeleteAnimate ? 'animate__animated animate__fadeOutLeft' : ''
        } ${activeStar ? 'shadow-md shadow-yellow-500' : ''}`}
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
      <Favorites propActiveStar={activeStar} handlerClick={handlerCLickActiveStar} />
    </div>
  )
}

export default Task
