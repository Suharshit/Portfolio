import React from 'react'
import AuthorImg from '../../../public/WhatsApp Image 2024-12-20 at 12.09.54 AM (1).jpeg';
import Image from 'next/image';

const MainImg = () => {
  return (
    <div className='relative'>
        <span className='h-24 w-24 bg-blue-500 absolute blur-sm rounded-2xl opacity-50'></span>
        <span className='h-24 w-24 bg-white absolute blur-sm rounded-2xl opacity-50 bottom-0 right-0'></span>
        <span className='h-24 w-24 bg-white absolute blur-sm opacity-60 rounded-full right-0'></span>
        <Image 
            src={AuthorImg} 
            alt='Author Img' 
            width={300} 
            height={300} 
            className='rounded-full'
        />
    </div>
  )
}

export default MainImg