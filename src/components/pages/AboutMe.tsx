import { CircleChevronRight } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='sm:pb-12 flex flex-col justify-center select-none max-sm:px-2'>
        <h1 className='nunito text-2xl px-2 font-bold max-sm:text-center'>About Me</h1>
        <div className='flex sm:space-x-5'>
            <span className='h-1 w-[100px] mt-3 ml-2 bg-white rounded-full hidden sm:block'></span>
            <div className='relative w-full'>
                <span className='bg-white rounded-lg opacity-10 absolute z-[-10px] w-full h-full'></span>
                <div className='w-full px-3 py-3'>
                  Hi, my name is Suharshit Singh, I&apos;m a second-year B.Tech Student at Lovely Professional University. I enjoy challenging myself developing complex logic behind web applications, and to make front-end more visually pleasing. My focus these day is learning DevOps and also finding freelance work.
                  <br />
                  <br />
                  Here are a few Technologies on which I&apos;m currently working:
                  <br />
                  <div className='grid grid-cols-2 gap-x-1 mt-1'>
                    <span className='flex gap-x-2'>
                      <CircleChevronRight className='h-5 w-5'/>Next js
                    </span>
                    <span className='flex gap-x-2'>
                      <CircleChevronRight className='h-5 w-5'/>Express
                    </span>
                    <span className='flex gap-x-2'>
                      <CircleChevronRight className='h-5 w-5'/>Prisma
                    </span>
                    <span className='flex gap-x-2'>
                      <CircleChevronRight className='h-5 w-5'/>Postgres
                    </span>
                    <span className='flex gap-x-2'>
                      <CircleChevronRight className='h-5 w-5'/>AI/ML with Python
                    </span>
                  </div>
                  <p className='mt-2'>Open for Freelance work</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe