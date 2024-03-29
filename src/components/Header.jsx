import React from 'react'

export const Header = () => {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
        <a href='/'>
            <h1 className='font-medium'>
                <span className='text-blue-400 bold'>SMCP</span> Mapping
            </h1>
        </a>
        <button className='flex items-center gap-2 specialBtn px-4 py-3 rounded-lg text-blue-400'>
            <p>New</p>
            <i className="fa-solid fa-plus"></i>
        </button>
    </header>
  )
}
