import React from 'react'
import MainImg from '../ui/MainImg'

const LandingPage = () => {
  return (
    <>
      <div className='flex w-full h-[95vh] items-center justify-between px-5 select-none'>
        <div className='w-[50%]'>
          <h1 className='text-4xl nunito'>
            <strong>Suharshit singh</strong> <br /> here,
          </h1>
          <p>
            I&apos;m a <strong>Fullstack Web Developer</strong>, passionate about making Scalable and Interactive web applications
          </p>
          {/* add cv dowload button */}
        </div>
        <div className=''>
          <MainImg/>
        </div>
      </div>
    </>
  )
}

export default LandingPage