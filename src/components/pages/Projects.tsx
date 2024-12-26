import React from 'react'
import ProjectCard from '../ui/ProjectCard'
import PortfolioImg from "../../../public/Screenshot 2024-12-23 092044.png";

const Projects = () => {
    const Portfolio: string = PortfolioImg.src;
  return (
    <div className='h-full'>
        <div className='max-sm:text-center'>
            <h1 className='text-3xl font-bold nunito'>My Projects</h1>
            <p className='text-lg font-light nunito'>Some things which I&apos;ve build so far:</p>
        </div>
        <div className='mt-5 sm:grid sm:grid-cols-2 gap-y-10 gap-x-10 max-sm:px-4 max-sm:space-y-8'>
            <ProjectCard 
                img={Portfolio}
                title='My Portfolio'
                description='This is my portfolio, this shows how much I passonate about making Attractive and Interactive web applications'
                link=''
            />
            <ProjectCard 
                img={Portfolio}
                title='My Portfolio'
                description='This is my portfolio, this shows how much I passonate about making Attractive and Interactive web applications'
                link=''
            />
            <ProjectCard 
                img={Portfolio}
                title='My Portfolio'
                description='This is my portfolio, this shows how much I passonate about making Attractive and Interactive web applications'
                link=''
            />
        </div>
    </div>
  )
}

export default Projects