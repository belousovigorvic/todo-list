import React, { useContext, useEffect, useState } from 'react';
import { PiSmileySadDuotone } from 'react-icons/pi';
import Title from '../../Components/Title/Title';
import Task from '../../Components/Task/Task';
import Add from '../../Components/Add/Add';
import Counter from '../../Components/Counter/Counter';
import { ContextData } from '../../App';

const TodoList = () => {
  const [todoData, setTodoData] = useContext(ContextData);
  const [, setAnimateStartRender] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Добавлено состояние для выбранной категории

  useEffect(() => {
    // При каждом монтировании компонента, пытаемся загрузить данные из localStorage
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTodoData(JSON.parse(savedTasks));
    }
    setAnimateStartRender(true);
  }, []);

  const deletedTask = (index) => {
    setTimeout(() => {
      const filteredTasks = todoData.filter((item, id) => index !== id);
      setTodoData(filteredTasks);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    }, 800);
  };

  const onChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div
      className={`${setAnimateStartRender ? 'animate__animated animate__fadeIn' : ''} 
      bg-zinc-700 h-full relative px-5 rounded-lg pb-5 flex flex-col transition-all`}
    >
      <Title>My ToDo List</Title>
      <select onChange={onChangeCategory} className='p-4 rounded-md mb-6' name="category" id="_category">
        <option value="All">All {todoData.length}</option>
        <option value="Work">Work  {todoData.filter(item => item.category === 'Work').length}</option>
        <option value="Hobby">Hobby {todoData.filter(item => item.category === 'Hobby').length}</option>
        <option value="Sport">Sport {todoData.filter(item => item.category === 'Sport').length}</option>
        <option value="Friends">Friends {todoData.filter(item => item.category === 'Friends').length}</option>
        <option value="Family">Family {todoData.filter(item => item.category === 'Family').length}</option>
        <option value="Shops">Shops {todoData.filter(item => item.category === 'Shops').length}</option>
        <option value="Other">Other {todoData.filter(item => item.category === 'Other').length}</option>
      </select>
      <div className='flex flex-col transition-all flex-wrap'>
        {todoData.length !== 0 ?
          todoData
            .filter(todo => selectedCategory === 'All' || todo.category === selectedCategory) // Фильтрация по выбранной категории
            .map((todo, index) => (
              <Task
                key={todo.id}
                title={todo.title}
                body={todo.body}
                category={todo.category}
                date={todo.date}
                color={todo.color}
                bgColor={todo.color}
                favorit={todo.favorit}
                editTaskClick={todo}
                indexFavorit={index}
                deleteTask={() => {
                  deletedTask(index);
                }}
              />
            ))
          : <div className='flex justify-center text-center text-slate-100 text-4xl mb-6'>
            <PiSmileySadDuotone />
          </div>
        }
      </div>
      <Add />
      <Counter />
    </div>
  );
};

export default TodoList;
