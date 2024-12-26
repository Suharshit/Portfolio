import React from 'react'

const AboutMe = () => {
  return (
    <div className='sm:pb-12 flex flex-col justify-center select-none max-sm:px-2'>
        <h1 className='nunito text-2xl px-2 font-bold max-sm:text-center'>About Me</h1>
        <div className='flex sm:space-x-5'>
            <span className='h-1 w-[100px] mt-3 ml-2 bg-white rounded-full hidden sm:block'></span>
            <div className='relative w-full'>
                <span className='bg-white rounded-lg opacity-10 absolute z-[-10px] w-full h-full'></span>
                <p className='w-full px-3 py-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, cupiditate eum facilis soluta tempora facere atque ipsa hic asperiores veritatis dignissimos placeat repellat ab quam, nisi consectetur distinctio nobis alias assumenda at repellendus corporis deserunt! Quis consequuntur, nobis laboriosam, voluptate quo ex beatae nam distinctio facere, enim at cumque? Quae?
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe