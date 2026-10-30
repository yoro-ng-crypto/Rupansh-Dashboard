import React from 'react'
import { FileTerminal , Receipt ,House } from 'lucide-react'

export const Bottom = () => {
  return (
    <nav className='fixed bottom-0 left-0 right-0 h-16 bg-blue-300 flex items-center justify-around px-2 z-20'>
      <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center'>
        <House className={`text-black`} />
      </div>
      <a href="">
        <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
        <Receipt className={`text-gray-500`} />
      </div>
      </a>
      <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
        <FileTerminal className='text-gray-500'/>
      </div>
    </nav>
  )
}
export default Bottom