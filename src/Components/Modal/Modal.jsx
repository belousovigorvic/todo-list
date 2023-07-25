import React from 'react'

const Modal = ({ active }) => {
  return (
    <h1
      className={`${active} z-40 opacity-0 transition-opacity absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl text-green-400 font-semibold`}
    >
      Success!
    </h1>
  )
}

export default Modal
