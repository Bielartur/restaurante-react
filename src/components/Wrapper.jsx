import React from 'react'

export default function Wrapper({ children }) {
  return (
    <div className="w-full min-h-screen pt-16 pb-8 flex flex-col items-center bg-slate-100">
      {children}
    </div>
  )
}
