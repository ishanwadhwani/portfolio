import React from 'react'
import Project1 from '../assests/portfolio/project1.png'
import Project2 from '../assests/portfolio/project2.png'
import Project3 from '../assests/portfolio/project3.png'
import Project4 from '../assests/portfolio/project4.png'
const Portfolio = () => {
    const projects = [
        {
            id: 1,
            src: Project1
        },
        {
            id: 2,
            src: Project2
        },
        {
            id: 3,
            src: Project3
        },
        {
            id: 4,
            src: Project4
        },
    ]
  return (
    <div name='portfolio' className='bg-black text-white w-full md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-[#CC5500] text-4xl font-bold inline border-b-4 border-white hover:text-white hover:border-[#CC5500]'>
                    Projects</p>
                <p className='py-6 text-xl'>Projects I've worked on...</p>
            </div>


            {/* cards */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                projects.map(({id, src}) => (

                    <div key={id} className='shadow-md hover:shadow-white rounded-lg '>
                        <img src={src} alt="" className='rounded-md duration-500 hover:scale-105'/>
                        <div className='flex justify-center items-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-500 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-500 hover:scale-105'>Code</button>
                        </div>
                    </div>

                ))
            }
            {/* end of cards */}
            </div>
        </div>
    </div>
  )
}

export default Portfolio