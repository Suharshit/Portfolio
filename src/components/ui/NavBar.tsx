import React from 'react'
import CopyButton from './CopyButton'
import Link from 'next/link'

const NavBar = () => {
  return (
    <>
        <div className=''>
          {/* <span className='absolute w-full h-full bg-black px-4 py-6 rounded-full'></span> */}
          <div className='flex items-center justify-between w-full z-10 px-5'>
            <span className='flex items-center space-x-3'>
              <CopyButton textToCopy={"suharshit123@gmail.com"}/>
              <Link href={""} className='px-4 py-2 bg-white text-black rounded-full'>Resume</Link>
            </span>
            {/* add social links */}
            <span className='space-x-2 flex'>
              <Link href={'https://www.linkedin.com/in/suharshit-singh-bba1a9272'}>LinkedIn</Link>
              <p>/</p>
              <Link href={'https://github.com/Suharshit'}>Github</Link>
              <p>/</p>
              <Link href={'https://x.com/suharshit_0'}>Twitter</Link>
            </span>
          </div>
        </div>
    </>
  )
}

export default NavBar