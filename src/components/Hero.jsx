import React from 'react'
import Video from '../assests/video.mp4'
import Ishan from '../assests/ishan.jpg'
import { BiRightArrowAlt } from 'react-icons/bi'
const Hero = () => {
  return (
    <div>
        <div className='w-full h-[-90vh] top-[90px]'>
            <video className='object-cover w-full h-full absolute -z-10' src={ Video } autoPlay loop muted />
        </div>
        <div name="hero" className=' w-full h-[90vh] top-[90px]' >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center 
            justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:7xl font-bold text-white'>
                    Hi ! I'm Ishan Wadhwani
                </h2>

                <p className='text-gray-500 py-4'>
                    Dedicated student with a solid 8.9 GPA, proficient in coding, and able to work effectively either independently
                    or within a team. Eager to learn new things, including creative work, which can be very helpful for an
                    organization such as yours.
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center 
                    cursor-pointer hover:text-black'>
                        Portfolio
                        <span className='group-hover:text-black group-hover:rotate-90 
                        duration-300'>
                            <BiRightArrowAlt size={20} className='ml-1 mt-0.5'/>
                        </span>
                    </button>
            </div>
            </div>
            <div >
                <img src={Ishan} alt="my profile" className='rounded-full mx-auto w-2/3 md:w-full'/>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Hero