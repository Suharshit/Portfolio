import React from 'react'
import MainImg from '../ui/MainImg'
import Link from 'next/link'

const MobileLandingPage = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center'>
        <div className='mt-24'>
            <MainImg/>
        </div>
        <div className='text-center px-8 pt-5 space-y-'>
            <h1 className='text-xl font-bold'>I&apos;m Suharshit Singh</h1>
            <p>Passionate <b>Developer</b>, <b>Critical Thinker</b>, <b>Problem Solver</b></p>
        </div>
        <div className='mt-4'>
            <Link href={''} className='px-10 py-3 bg-white text-black rounded-full'>CV</Link>
        </div>
    </div>
  )
}

export default MobileLandingPage