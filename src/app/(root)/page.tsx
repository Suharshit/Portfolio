import React from 'react'
import NavBar from '@/components/ui/NavBar'
import LandingPage from '@/components/pages/LandingPage'
import AboutMe from '@/components/pages/AboutMe'
import Skills from '@/components/pages/Skills'
import Projects from '@/components/pages/Projects'
import Contacts from '@/components/pages/Contacts'
import NavBarMobile from '@/components/ui/NavBarMobile'
import MobileLandingPage from '@/components/pages/MobileLandingPage'

const page = () => {
  return (
    <>
        <div className=''>
            <div className='sm:px-72 snap-y scroll-smooth'>
                <div className='pt-5 hidden sm:block'>
                    <NavBar />
                </div>

                <div className='sm:hidden block pt-5'>
                    <NavBarMobile/>
                </div>

                <div className='hidden sm:block'>
                    <LandingPage />
                </div>

                <div className='block sm:hidden'>
                    <MobileLandingPage/>
                </div>

                <div className='h-screen flex flex-col items-center justify-center'>
                    <AboutMe/>
                </div>

                <div className='min-h-screen'>
                    <Skills/>
                </div>

                <div className='min-h-screen mb-20 max-sm:pt-10'>
                    <Projects/>
                </div>

                <div className='h-auto'>
                    <Contacts/>
                </div>
            </div>
        </div>
    </>
  )
}

export default page