import React from 'react'

function Center({ children }) {
  return (
    <div className='min-w-fit max-w-120 flex grow justify-center items-center'>{children}</div>
  )
}

export default Center;

