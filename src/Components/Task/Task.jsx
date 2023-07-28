// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ContextData } from '../../App';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';

const Task = ({ title, body, category, date, color, deleteTask, editTaskClick, favorit, indexFavorit }) => {

  const [taskData, setTaskData] = useContext(ContextData);
  const [taskDeleteAnimate, setTaskDeleteAnimate] = useState(false);
  const [activeStar, setActiveStar] = useState(favorit);

  const handlerCLickActiveStar = () => {
    setActiveStar((prev) => !prev);
    const updatedTaskData = [...taskData];
    updatedTaskData[indexFavorit].favorit = !activeStar;
    setTaskData(updatedTaskData);
    localStorage.setItem('tasks', JSON.stringify(taskData));
  };

  const animateDelete = () => {
    setTaskDeleteAnimate(true);
  };

  return (
    <div style={{ backgroundColor: color }}
      className={`p-4 rounded-md transition-all bg-zinc-800 mb-5 relative
        ${taskDeleteAnimate ? 'animate__animated animate__fadeOut' : ''} 
        ${taskData[indexFavorit].favorit ? 'shadow-md shadow-yellow-500' : ''}`}>
      <h2 className='text-2xl font-semibold mb-4 text-zinc-50'>{title}</h2>
      <p className='mb-4 text-zinc-50'>{body}</p>
      <p className='mb-4 text-zinc-50'>Category: {category}</p>
      <p className='mb-4 text-zinc-50'>{date}</p>
      <Checkbox onClick={animateDelete} onChange={deleteTask} /> <span className='text-zinc-50'>Delete</span>
      <Link
        to={'/edit-todo'}
        state={editTaskClick}
        className='text-zinc-50 absolute top-3 right-3 cursor-pointer text-lg'>
        edit &#9998;
      </Link>
      <Favorites
        animatedClick={taskData[indexFavorit].favorit}
        propActiveStar={taskData[indexFavorit].favorit}
        handlerClick={handlerCLickActiveStar} />
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTaskClick: PropTypes.any.isRequired,
  favorit: PropTypes.bool.isRequired,
  indexFavorit: PropTypes.number.isRequired,
};

export default Task;
