import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardDetails {
    img: string,
    title: string,
    description: string,
    link: string
}

const ProjectCard: React.FC<ProjectCardDetails> = ({
    img,
    title,
    description,
    link
}) => {
  return (
    <div className='inline-block'>
        <div className=''>
            <Image
                src={img}
                alt={title}
                width={500}
                height={500}
                className='rounded-lg border-2 border-white sm:h-[250px] sm:w-[450px] max-sm:h-[200px] max-sm:w[240px]'
            />
        </div>
        <div className='mt-3 w-full space-y-2'>
            <div className='flex text-xl items-center justify-between pr-4'>
                <h2 className='font-bold'>{title}</h2>
                <Link href={link} className='font-semibold bg-zinc-700 text-white px-6 py-1 rounded-full'>Pop In</Link>
            </div>
            <p className='text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard