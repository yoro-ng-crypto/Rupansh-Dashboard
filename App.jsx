import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './Pages/Page1'
import Bottom from './components/bottom'

export const App = () => {
  return (
    <div className='min-h-dvh w-full bg-blue-600'>
      <Navbar />
      <Page1 />
      <Bottom />
    </div>
  )
}
export default App  