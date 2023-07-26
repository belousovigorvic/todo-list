import { useState, useContext } from "react"
import { ContextData } from "../../App"
import { useEffect } from "react"

const Counter = () => {
    const [todoData, setTodoData] = useContext(ContextData)
    const [counter, setCounter] = useState(todoData.length)
    useEffect(() => {
        setCounter(todoData.length)
    }, [todoData])
    return (
        <h1 className="absolute text-zinc-50 text-2xl top-6 left-6">Counter Tasks: {counter}</h1>
    )
}

export default Counter