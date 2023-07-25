import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlusCircle } from '../../../node_modules/react-icons/ai'

const Add = () => {
  return (
    <div className="flex justify-center">
      <Link to="/create-todo">
        <AiOutlinePlusCircle className="text-zinc-50 text-3xl inline-block hover:text-cyan-300 transition-colors" />
      </Link>
    </div>
  )
}

export default Add
