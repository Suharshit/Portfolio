import Image from 'next/image'
import React from 'react'

interface SkillIcon {
    text: string,
    icon:string,
    start: string,
    end: string
}

interface colorVarient {
    [key: string]: string,
    blue: string,
    green: string,
    red: string,
    yellow: string,
    purple: string,
    orange: string,
    pink: string,
    white: string,
    zinc: string,
    lightblue: string,
    lightgray: string

}

const SkillBox: React.FC<SkillIcon> = ({text, icon, start, end}) => {
    const colorVarientStart: colorVarient = {
        "blue": "from-blue-400",
        "green": "from-green-400",
        "red": "from-red-400",
        "yellow": "from-yellow-400",
        "purple": "from-purple-400",
        "zinc": "from-zinc-600",
        "pink": "from-pink-400",
        "lightblue": "from-[#51a9fc]",
        "orange": "from-orange-400",
        "white": "from-white",
        "lightgray": "from-gray-400"
    };
    const colorVarientEnd: colorVarient = {
        "blue": "to-blue-600",
        "green": "to-green-600",
        "red": "to-red-600",
        "yellow": "to-yellow-600",
        "purple": "to-purple-600",
        "zinc": "to-zinc-800",
        "pink": "to-pink-600",
        "lightblue": "to-[#51a9fc]",
        "orange" : "to-orange-600",
        "white": "to-white",
        "lightgray": "to-gray-800"
    }
  return (
    <div className='sm:h-[160px] sm:w-[160px] sm:flex max-sm:h-[140px] max-sm:w-[150px]'>
        <div className={`h-full w-full bg-gradient-to-br ${colorVarientStart[start]} ${colorVarientEnd[end]} px-[2px] py-[2px] rounded-2xl`}>
            <div className='bg-black h-full w-full rounded-2xl flex flex-col items-center justify-center space-y-2'>
                <Image
                    src={icon}
                    alt={text}
                    width={250}
                    height={250}
                    className='h-auto w-[68px]'
                />

                <h1 className='text-2xl nunito font-bold'>
                    {text}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default SkillBox