import React from 'react'
import { ImGift } from 'react-icons/im'

const Marquee = ({imagesurls}) => {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
      {imagesurls.map((url,index)=> <img key={index} src={url} className='w-[6vw] flex-shrink-0'></img>)}
      {imagesurls.map((url,index)=> <img key={index} src={url} className='flex-shrink-0'></img>)}
    </div>
  )
}

export default Marquee
