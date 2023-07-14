import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[480px]  bg-blue-100 mx-auto my-20 lg:mb-[20%] sm:mb-[35%] pt-16  px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non commodi architecto saepe ipsa?</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 grid-rows-4 md:grid-rows-6  gap-2 h-[550px] lg:h-[600px] '>
            <img className='row-span-1 md:row-span-3  object-cover  w-full h-full ' src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
            <img className='row-span-2 md:row-span-6 object-cover  w-full h-full  ' src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=60" alt="" />
            <img className='row-span-1 md:row-span-3 object-cover  w-full h-full ' src="https://images.unsplash.com/photo-1578898886225-c7c894047899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
    </div>
  )
}

export default Rooms