import React from 'react'

const Title = ({ children }) => {
  return (
    <h1 className="text-5xl text-center p-6 text-zinc-100 font-semibold">
      {children}
    </h1>
  )
}

export default Title
