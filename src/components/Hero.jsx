import React from 'react'
import Video from '../assests/video.mp4'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {AiFillMail} from 'react-icons/ai'

const Hero = () => {
  return (
    <div name="home">
        <div className='w-full h-[-90vh] top-[90px]'>
            <video className='object-cover w-full h-screen absolute -z-10' src={ Video } autoPlay loop muted />
        </div>
        <div name="hero" className=' w-full h-[90vh] top-[90px]' >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center 
            justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl font-bold text-white'>
                    Hi ! I'm Ishan Wadhwani
                    <br />
                    <span className='text-2xl text-[#CC5500]'>Your next door developer</span>
                </h2>

                <p className='text-gray-500 py-4'>

                </p>
                <div className="flex gap-4">
                <Link to="about" smooth={true} duration={1000}>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center 
                    cursor-pointer hover:text-black'>
                        Portfolio
                        <span className='group-hover:text-black group-hover:rotate-90 
                        duration-700'>
                            <BiRightArrowAlt size={20} className='ml-1 mt-0.5 '/>
                        </span>
                    </button>
                    </Link>
                    <div className='lg:hidden flex justify-between items-center gap-3 '>
                        <a 
                        className='hover:opacity-50 transition duration-500 hover:rotate-45 hover:duration-200 hover:translate-x-1'
                        href="https://www.linkedin.com/in/ishan-wadhwani-16a5b921b/"
                        target='_blank'
                        rel='noreferrer'>
                            <FaLinkedin size={30} color="white" />
                        </a>

                        <a 
                        className='hover:opacity-50 transition duration-500 hover:rotate-45 hover:duration-200 hover:translate-x-1 '
                        href='https://github.com/ishanwadhwani'
                        target='_blank'
                        rel='noreferrer'>
                            <FaGithub size={30} color="white" />
                        </a>

                        
                        <a 
                        className='hover:opacity-50 transition duration-500 hover:rotate-45 hover:duration-200 hover:translate-x-1 '
                        href='mailto: iwadhwani029@gmail.com'
                        target='_blank'
                        rel='noreferrer'>
                            <AiFillMail size={33} color="white" />
                        </a>

                        <a 
                        className='hover:opacity-50 transition duration-500 hover:rotate-45 hover:duration-200 hover:translate-x-1 '
                        href='/resume.pdf'
                        target='_blank'
                        rel='noreferrer'
                        download={true}
                        >
                            <BsFillPersonLinesFill size={33} color="white" />
                        </a>
                    </div>
            </div>
            </div>
             </div>
        </div>
    </div>
  );
};

export default Hero
