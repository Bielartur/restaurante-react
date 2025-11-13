import React from 'react'

export default function Wrapper({ children, className }) {
  return (
    <section className={`w-full min-h-screen pt-16 pb-8 flex flex-col items-cente ${className}`}>
      {children}
    </section>
  )
}
