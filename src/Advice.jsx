import React from 'react'
import pause from '../images/pattern-divider-desktop.svg'

const Advice = () => {
    return (
        <div className='h-auto w-[600px] rounded-lg bg-Dark-Grayish-Blue flex flex-col justify-center items-center '>
            <h1 className=' text-Neon-Green font-Manrope text-[15px] my-8'>ADVICE #123</h1>
            <p className=' text-Light-Cyan font-Manrope text-quote w-[75%]'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores quasi tenetur corrupti"</p>
            <div className='flex items-center justify-center '>
                <svg className=' m-10 ' width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
            </div>
            <div className=' mt-8 w-[65] h-[65px] flex items-center justify-center '>
                <span className='w-[65px] h-[65px] mt-8  flex items-center justify-center bg-Neon-Green rounded-full absolute hover:shadow-[0px_10px_10px_0px_hsl(150,100%,66%)]'>
                    <svg className='relative' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
                </span>

            </div>

        </div>
    )
}

export default Advice