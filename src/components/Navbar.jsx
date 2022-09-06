import React, {useState} from 'react'
import Logo from '../assests/logoimg.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='w-full h-[90px] bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <div>
                <img src={ Logo } width='90px' height='90px' alt="Ishan" />
                {/* <h1 className='text-[#CC5500]'>Ishan</h1> */}
            </div>
            <div className='hidden md:flex'>
                <ul className='flex text-[#CC5500] items-center'>
                    <li className='hover:text-white hover:cursor-default'>Home</li>
                    <li className='hover:text-white hover:cursor-default'>About</li>
                    <li className='hover:text-white hover:cursor-default'>Projects</li>
                    <li className='hover:text-white hover:cursor-default'>Skills</li>
                    
                    <button className='text-white ml-4'>Contact</button>
                </ul>
            </div>


            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
            </div>


            {/* mobile menu */}

            <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
                <ul>
                    <li className='text-2xl'>Home</li>
                    <li className='text-2xl'>About</li>
                    <li className='text-2xl'>Skills</li>
                    <li className='text-2xl'>Projects</li>
                    <button className='m-8 py-5'>Contact</button>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Navbar