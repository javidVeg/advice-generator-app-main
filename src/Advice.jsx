import React from 'react'
import pause from '../images/pattern-divider-desktop.svg'

const Advice = () => {
    return (
        <div className=' w-96 h-auto rounded-lg bg-Grayish-Blue'>
            <h1 className=' text-Neon-Green font-Manrope'>Advice</h1>
            <div className='inline-flex items-center justify-center w-full'>
                <hr className=' w-64 h-1 my-8 bg-white border-0' />
                <div className='absolute px-4 -translate-x-1/2  bg-red-500 left-1/2  '>
                <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
                </div>

            </div>

        </div>
    )
}

export default Advice