'use client';

import React, { useState, useRef } from 'react'

interface CopyButtonProps {
    textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({textToCopy}) => {
    const [copied, setCopied] = useState(false);
    const textRef = useRef<HTMLInputElement>(null);

    const handleCopy = () => {
        if(textRef.current){
            textRef.current.select();
            document.execCommand('copy');
            setCopied(true);
        }

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }


    return (
        <div className='select-none'>
            <button onClick={handleCopy} className='flex items-center'>
                <input 
                    type="text" 
                    value={textToCopy}
                    readOnly
                    ref={textRef}
                    className='bg-transparent border-none outline-none select-none cursor-pointer'
                />
            <p className={`px-5 py-2 rounded-full ${copied ?  "opacity-50 bg-zinc-800" : "opacity-100 bg-white text-black"}`}>{copied ? 'Copied!' : 'Copy'}</p>
            </button>
        </div>
    )
}

export default CopyButton