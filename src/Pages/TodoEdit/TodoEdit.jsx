import React, { useState, useContext, useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ContextData } from '../../App'
import Title from '../../Components/Title/Title'
import { Input, Select, DatePicker, Button, ColorPicker } from 'antd'
import 'animate.css'

const { TextArea } = Input

const TodoEdit = () => {
  const location = useLocation()
  const [taskData, setTaskData] = useContext(ContextData)
  const [animateStartRender, setAnimateStartRender] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // При каждом монтировании компонента, пытаемся загрузить данные из localStorage
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTaskData(JSON.parse(savedTasks))
    }
    setAnimateStartRender(prev => (prev = true))
    console.log(location)
  }, [])

  const [newTask, setNewTask] = useState({
    id: location.state.id,
    title: location.state.title,
    body: location.state.body,
    category: location.state.category,
    date: location.state.date,
  })

  const submitHandler = e => {
    e.preventDefault()
    const editedTask = () => {
      setTaskData(prev => [
        
        (prev[newTask.id] = {
          ...newTask,
        }),
      ])
    }

    editedTask()

    localStorage.setItem('tasks', JSON.stringify([...taskData]))
    // Сохраняем обновленную задачу
    navigate('/')
  }

  const handleChangeSelect = value => {
    setNewTask(prev => ({
      ...prev,
      category: value,
    }))
  }

  const onChangeDate = e => {
    setNewTask(prev => ({
      ...prev,
      date: e.target.value,
    }))
  }

  return (
    <div
      className={`relative ${
        setAnimateStartRender ? 'animate__animated animate__fadeIn' : ''
      } bg-emerald-700 px-5 rounded-lg pb-5`}
    >
      <Title>Edit ToDo</Title>
      <form onSubmit={submitHandler} className='flex flex-col justify-between'>
        <label className='text-zinc-50 text-xl' htmlFor='title'>
          Title
        </label>
        <Input
          id='title'
          name='title'
          type='text'
          required
          value={newTask.title}
          onChange={e => {
            setNewTask(prev => ({
              ...prev,
              title: e.target.value,
            }))
          }}
          className='rounded-md text-lg'
        />
        <label className='text-zinc-50 text-xl' htmlFor='body'>
          Body
        </label>
        <TextArea
          rows={4}
          id='body'
          name='body'
          type='text'
          required
          value={newTask.body}
          onChange={e => {
            setNewTask(prev => ({
              ...prev,
              body: e.target.value,
            }))
          }}
          className='rounded-md text-lg'
        />

        <label htmlFor='mySelect' className=' text-zinc-100 text-xl'>
          Category
        </label>
        <Select
          id='mySelect'
          defaultValue={newTask.category}
          onChange={handleChangeSelect}
          className=' bg-zinc-400 text-lg'
          options={[
            {
              value: 'Work',
              label: 'Work',
            },
            {
              value: 'Hobby',
              label: 'Hobby',
            },
            {
              value: 'Sport',
              label: 'Sport',
            },
            {
              value: 'Friends',
              label: 'Friends',
            },
          ]}
        />
        <label htmlFor='date' className=' text-zinc-100 text-xl'>
          Date
        </label>
        <input
          className='p-2 mb-6 rounded-md text-lg'
          type='date'
          value={newTask.date}
          id='date'
          onChange={e => {
            onChangeDate(e)
          }}
        />
        <button className='w-40 m-auto text-zinc-50 border rounded-md py-2 hover:border-green-500 hover:text-green-500 transition-colors'>
          Todo Edit
        </button>
      </form>
      <Link to={'/'}>
        <BiArrowBack className='absolute top-5 cursor-pointer text-zinc-50' />
      </Link>
    </div>
  )
}

export default TodoEdit
