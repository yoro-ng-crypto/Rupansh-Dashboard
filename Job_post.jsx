import React from 'react'

const getStatusClass = (status) => {
  const s = status.toLowerCase()
  if (s === 'complete') return 'bg-green-500'
  if (s === 'deny') return 'bg-yellow-500'
  return 'bg-red-600' // pending aur baaki sab ke liye
}




export const Job_post = ({ id, title, status, time, customer_name, customer_contact_no }) => {
  return (
    <div className='w-full rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl p-3 flex flex-col gap-2'>
      <div className='flex items-center justify-between gap-2'>
        <div className='flex items-center gap-2 min-w-0'>
          <h3 className='text-sm font-medium truncate'>{title}</h3>
          <span className='shrink-0 text-[0.6rem] px-2 py-0.5 rounded-full bg-yellow-200'>{time}</span>
        </div>
        <span className='shrink-0 flex items-center gap-1.5 px-2 h-6 text-[0.7rem] rounded-full border-2 border-sky-200 bg-white/60'>
          <span className={`w-2 h-2 rounded-full ${getStatusClass(status)}`} />
          {status}
        </span>
      </div>
      <div>
        <div className='flex gap-2'>
          <span><h1>Name:</h1></span>
          <span><h1>{ customer_name }</h1></span>
        </div>
        <div className='flex gap-1'>
          <span><h3>+91</h3></span>
          <span><h3>{customer_contact_no}</h3></span>
        </div>
        <button className='w-full h-8 rounded-full bg-blue-400 text-white text-sm'>Details</button>
      </div>
    </div>
  )
}
export default Job_post