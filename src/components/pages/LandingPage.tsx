import React from 'react'
import MainImg from '../ui/MainImg'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <>
      <div className='flex w-full h-[95vh] items-center justify-between px-5 select-none'>
        <div className='w-[60%]'>
          <p className='text-xl'>Hi, my name is</p>
          <h1 className='text-[70px] nunito'>
            <strong>Suharshit Singh</strong>
          </h1>
          <p className='mb-4'>
            I&apos;m a passionate Full-Stack Developer with a strong foundation in React Js & Next js with Typescript, Tailwind Css and Prisma with SQL/No-SQL databases.
          </p>
          <Link 
            href={"https://drive.google.com/file/d/1KDEn5KQTiwlLqUT52F_YFPXQvsAzgFYO/view?usp=sharing"}
            className='px-4 py-2 bg-white text-black rounded-lg text-lg nunito font-bold'
          >
            Resume
          </Link>
        </div>
        <div className=''>
          <MainImg/>
        </div>
      </div>
    </>
  )
}

export default LandingPage