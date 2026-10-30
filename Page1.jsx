import React, { useEffect, useState } from 'react'
import Job_post from '../components/Job_post'
import { SlidersHorizontal, Search } from 'lucide-react'
   

const jobs = [
  { id: 1, title: 'Aadhar update', status: 'pending', time: '3 min ago', customer_name: 'Rahul Sharma', customer_contact_no: '9876543210' },
  { id: 2, title: 'PAN card application', status: 'complete', time: '7 min ago', customer_name: 'Priya Verma', customer_contact_no: '9123456780' },
  { id: 3, title: 'Ration card form', status: 'deny', time: '12 min ago', customer_name: 'Amit Kumar', customer_contact_no: '9988776655' },
  { id: 4, title: 'Aadhar update', status: 'complete', time: '18 min ago', customer_name: 'Sneha Gupta', customer_contact_no: '9001122334' },
  { id: 5, title: 'Passport application', status: 'pending', time: '25 min ago', customer_name: 'Rohit Singh', customer_contact_no: '9812345670' },
  { id: 6, title: 'Income certificate', status: 'complete', time: '32 min ago', customer_name: 'Anjali Mehta', customer_contact_no: '9765432100' },
  { id: 7, title: 'Voter ID correction', status: 'pending', time: '40 min ago', customer_name: 'Vikas Yadav', customer_contact_no: '9899001122' },
  { id: 8, title: 'Driving license renewal', status: 'deny', time: '48 min ago', customer_name: 'Neha Joshi', customer_contact_no: '9911223344' },
  { id: 9, title: 'Scholarship form', status: 'pending', time: '55 min ago', customer_name: 'Karan Malhotra', customer_contact_no: '9654321098' },
  { id: 10, title: 'Birth certificate copy', status: 'complete', time: '1 hr ago', customer_name: 'Pooja Rani', customer_contact_no: '9871234560' },
]

// Clock hook: current time har second update hota hai
export function useClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return now
}

// Milliseconds ko mm:ss.cs format mein badalne ke liye
const formatTime = (ms) => {
  const m = Math.floor(ms / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  const c = Math.floor((ms % 1000) / 10)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(c).padStart(2, '0')}`
}

// Stopwatch component
export function Stopwatch() {
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const start = Date.now() - elapsed
    const id = setInterval(() => setElapsed(Date.now() - start), 100)
    return () => clearInterval(id)
  }, [running])

  return (
    <div className='flex flex-col gap-2'>
      <div className='text-2xl font-mono'>{formatTime(elapsed)}</div>
      <div className='flex gap-2'>
        <button
          onClick={() => setRunning(!running)}
          className='px-3 h-9 rounded-full bg-white/70 text-sm'
        >
          {running ? 'Stop' : 'Start'}
        </button>
        <button
          onClick={() => { setRunning(false); setElapsed(0) }}
          className='px-3 h-9 rounded-full bg-white/70 text-sm'
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export const Page1 = () => {
  const now = useClock()

  return (
    <main className='w-full min-h-dvh bg-blue-100 px-3 pt-3 pb-24 md:pb-6'>
      <div className='w-full flex gap-3 mb-3'>
        <div className='flex-1 rounded-2xl bg-white/50 p-3'>
          <h1 className='font-semibold mb-2'>Stopwatch</h1>
          <Stopwatch />
        </div>
        <div className='flex-1 rounded-2xl bg-white/50 p-3'>
          <h1 className='font-semibold mb-2'>Clock</h1>
          <div className='text-2xl font-mono'>{now.toLocaleTimeString()}</div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-4'>

        {/* jobs panel */}
        <section className='lg:col-span-2 min-w-0 rounded-2xl bg-white/50 p-3 flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <h2 className='font-semibold'>Recent jobs</h2>
            <span className='text-xs text-slate-500'>{jobs.length} pending</span>
          </div>

          <div className='flex items-center gap-2'>
            <button className='shrink-0 flex items-center gap-1.5 h-10 px-3 rounded-full bg-white/70 text-sm'>
              <SlidersHorizontal size={16} /> Filter
            </button>
            <label className='flex flex-1 min-w-0 items-center gap-2 h-10 px-3 rounded-full bg-white/70'>
              <Search size={16} className='shrink-0' />
              <input className='w-full min-w-0 bg-transparent outline-none text-sm' placeholder='Search' />
            </label>
          </div>

          <div className='max-h-[50dvh] overflow-y-auto overscroll-contain flex flex-col gap-2 pr-1'>
            {jobs.map((job) => (
              <Job_post
              key={job.id}
              title={job.title}
              status={job.status}
              time={job.time}
              customer_name={job.customer_name}
              customer_contact_no={job.customer_contact_no}
              />
            ))}
          </div>
        </section>

        {/* payout + performance */}
        <aside className='min-w-0 flex flex-col gap-3'>
          <section className='rounded-2xl bg-white/50 p-3'>
            <h2 className='font-semibold mb-2'>Payout</h2>
            <div className='grid grid-cols-2 gap-2 text-sm'>
              <div className='rounded-xl bg-white/70 p-2'>
                <p className='text-slate-500'>Today</p>
                <p className='text-lg font-semibold'>₹0</p>
              </div>
              <div className='rounded-xl bg-white/70 p-2'>
                <p className='text-slate-500'>Pending</p>
                <p className='text-lg font-semibold'>₹0</p>
              </div>
            </div>
          </section>

          <section className='rounded-2xl bg-white/50 p-3'>
            <h2 className='font-semibold mb-2'>Performance</h2>
            <div className='grid grid-cols-2 gap-2 text-sm'>
              <div className='rounded-xl bg-white/70 p-2'>
                <p className='text-slate-500'>Done today</p>
                <p className='text-lg font-semibold'>0</p>
              </div>
              <div className='rounded-xl bg-white/70 p-2'>
                <p className='text-slate-500'>Avg time</p>
                <p className='text-lg font-semibold'>0 min</p>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </main>
  )
}

export default Page1