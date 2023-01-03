import React, {useState} from 'react'
import Logo from '../assests/logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='w-full h-[90px] bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full '>
            <div className=' hover:duration-1000 hover:animate-pulse '>
                <img src={ Logo } width='90px' height='90px' alt="Ishan" />
                {/* <h1 className='text-[#CC5500]'>Ishan</h1> */}
            </div>
            <div className='hidden md:flex'>
                <ul className='flex text-[#CC5500] items-center'>
                    <li className='hover:text-white hover:cursor-default transition duration-700'><Link to="home" smooth={true} duration={1000}>Home</Link></li>
                    <li className='hover:text-white hover:cursor-default transition duration-700'><Link to="about" smooth={true} duration={1000}>About</Link></li>
                    <li className='hover:text-white hover:cursor-default transition duration-700'><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
                    <li className='hover:text-white hover:cursor-default transition duration-700'><Link to="skills" smooth={true} duration={1000}>Skills</Link></li>
                    <Link to="contact" smooth={true} duration={1000}>
                    <button className='text-white ml-4 hover:scale-110 duration-1000'>
                        Contact
                    </button>
                    </Link>
                </ul>
            </div>


            <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
            </div>


            {/* mobile menu */}

            <div className={nav ? 'w-full bg-black transition duration-700 text-white absolute top-[90px] left-0 flex justify-center text-center' : 'transition duration-700 absolute left-[-100%]'}>
                <ul>
                    <li className='text-2xl cursor-pointer'><Link to="home" smooth={true} duration={1000}>Home</Link></li>
                    <li className='text-2xl cursor-pointer'><Link to="about" smooth={true} duration={1000}>About</Link></li>
                    <li className='text-2xl cursor-pointer'><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
                    <li className='text-2xl cursor-pointer'><Link to="skills" smooth={true} duration={1000}>Skills</Link></li>
                    <Link to="contact" smooth={true} duration={1000}>
                    <button className='m-8 py-5 hover:scale-110 duration-600'>Contact</button></Link>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Navbar
