import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] flex justify-between items-center px-5 py-5 border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] border-zinc-600 '>
      <img src={val.url} alt="" />
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
