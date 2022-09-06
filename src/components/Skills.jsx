import React from 'react'
import html from '../assests/html.png'
import css from '../assests/css.png'
import js from '../assests/javascript.png'
import react from '../assests/react.png'
import tailwind from '../assests/tailwind.png'
import python from '../assests/python.png'
import github from '../assests/github.png'
const Skills = () => {
    const skill = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: js,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: python,
            title: 'PYTHON',
            style: 'shadow-gray-300'
        },
        {
            id: 7,
            src: github,
            title: 'GITHUB',
            style: 'shadow-purple-400'
        },
    ]
  return (
    <div name='skills' className='bg-black w-full h-screen' >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col 
        justify-center w-full h-full text-white'>
            <div>
                <p className='text-[#CC5500] text-4xl font-bold inline border-b-4 border-white
                 hover:text-white hover:border-[#CC5500]'>Skills</p>
                <p className='py-6 text-xl'>Languages I've worked with...</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3
            gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    skill.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 
                        duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Skills