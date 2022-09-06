import React from 'react'

const contact = () => {
  return (
    <div contact='contact' className='w-full h-screen bg-black p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-[#CC5500] text-4xl font-bold inline border-b-4
                 border-white hover:text-white hover:border-[#CC5500]'>Contact</p>
                <p className='py-6 text-xl'>Fill the given form to get in touch with me...</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/1bc767ed-c1b8-4507-a451-00112b37e4f0" method='POST' className='flex flex-col w-full md:w-1/2 '>

                    <input type="text" name="name" placeholder='Enter your name'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                    <input type="text" name="email" placeholder='Enter your mail'
                    className='p-2 bg-transparent my-2 border-2 rounded-md text-white focus:outline-none' />

                    <textarea name="message" rows="10" placeholder='Enter your message'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    ></textarea>

                    <button className='text-white
                    px-6 py-3 my-8 mx-auto flex items-center rounded-md 
                    hover:scale-110 duration-500'>Let's Chat</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default contact