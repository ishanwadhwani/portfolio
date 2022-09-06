import React from 'react'

const about = () => {
  return (
    <div name="about" className='w-full h-screen bg-black text-white'>
        <div className='max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-[#CC5500] text-4xl font-bold inline border-b-4 border-white hover:text-white hover:border-[#CC5500]'>
                About</p>
            </div>
            <p className='text-xl mt-10'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit culpa consequatur veniam laborum. Maiores voluptates quam 
                inventore quasi at numquam? Dicta maxime aliquid dolorem totam nobis nam repellendus consequatur aut saepe nisi praesentium eius est accusamus, facilis magni corrupti sequi. 
                Distinctio repellat voluptates, praesentium dolor ratione tenetur repudiandae ipsam amet?
            </p>

            <br />

            <p className='text-xl '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, commodi ea repudiandae officia eveniet accusantium? Voluptas iure quo ratione, quasi, dignissimos quas expedita, 
                atque fugiat tempore perferendis quaerat? Dolor libero, error numquam cupiditate, voluptatum vero ducimus qui rerum eaque tenetur voluptas quasi illum praesentium. Beatae eaque ut provident sequi iusto.
            </p>
        </div>
    </div>
  )
}

export default about