import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Container from './Components/Container/Container'
import Wrapper from './Components/Wrapper/Wrapper'
import TodoList from './Pages/TodoList/TodoList'
import TodoCreate from './Pages/TodoCreate/TodoCreate'
import { createContext, useState } from 'react'
import TodoEdit from './Pages/TodoEdit/TodoEdit'

export const ContextData = createContext(null)

function App() {
  const [taskData, setTaskData] = useState([])

  return (
    <Wrapper>
      <Container>
        <ContextData.Provider value={[taskData, setTaskData]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path='/edit-todo' element={<TodoEdit/>} />
              <Route path="/create-todo" element={<TodoCreate />} />
            </Routes>
          </BrowserRouter>
        </ContextData.Provider>
      </Container>
    </Wrapper>
  )
}

export default App
