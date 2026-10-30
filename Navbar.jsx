import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react'

// Menu ke links yahan define karein
const links = [
  { label: 'Home', href: '#home' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Stopwatch', href: '#stopwatch' },
  { label: 'Clock', href: '#clock' },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header className='w-full h-16 sm:h-20 flex items-center justify-between px-4 bg-blue-50 sticky top-0 z-10 shadow-lg'>
        <div className='h-12 flex items-center gap-2 shadow-2xl px-3 py-1 rounded-2xl bg-white/60'>
          <img src={logo} alt='Rupansh Online Solutions' className='h-10 w-10 object-contain' />
          <div className='leading-tight'>
            <h1 className='text-xl sm:text-2xl font-semibold'>Online</h1>
            <h1 className='text-base sm:text-lg'>Solutions</h1>
          </div>
        </div>

        <button
  onClick={() => setOpen(true)}
  aria-label='Open menu'
  aria-expanded={open}
  className={`w-11 h-11 items-center justify-center rounded-full border-2 border-violet-400 backdrop-blur-2xl shadow-xl transition-opacity duration-200 ${
    open ? 'hidden' : 'flex'
  }`}
>
  <Menu className='text-violet-400' size={24} />
</button>
      </header>

      <aside
        aria-hidden={!open}
        className={`fixed top-0 left-0 z-50 w-3/5 max-w-xs h-full bg-white rounded-bl-2xl shadow-xl
          transition-[transform,visibility] duration-200 ${
            open ? 'translate-x-0 visible' : 'translate-x-full invisible'
          }`}
      >
        <div className='h-16 px-4 flex items-center justify-end'>
          <button
            onClick={close}
            aria-label='Close menu'
            className='h-11 w-11 flex items-center justify-center text-tweak-heading'
          >
            <X size={28} />
          </button>
        </div>

        <nav className='px-4 flex flex-col justify-center items-center gap-2 backdrop-blur-lg'>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={close}
              className='px-4 py-3 rounded-lg text-tweak-heading font-medium hover:bg-tweak-card'
            >
              {l.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Navbar