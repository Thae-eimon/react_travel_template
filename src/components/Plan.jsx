import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 '>
        {/* Let Side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1619583331940-53c773ed2e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        {/* Right Side */}
        <div className='flex flex-col h-full justify-center '>
            <h3 className='text-5xl md:text-6xl  font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolores.</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ex! Ipsa quisquam expedita doloremque rem.</p>

        <div>
            <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
            <button className='bg-black text-white hover:shadow-xl'>Book Your Trip</button>
        </div>
        </div>
    </div>

  )
}

export default Plan