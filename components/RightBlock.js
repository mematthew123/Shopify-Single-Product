import React from 'react'

const RightBlock = () => {
  return (
    <div className='flex flex-col md:flex-row bg-stone-600'>
        <div className='md:w-1/2 hover:border-cyan-700 '>
            <img src='https://cdn.shopify.com/s/files/1/0596/3438/5036/files/unisex-lightweight-hoodie-black-front-6393c94178b4d.jpg?v=1670782452' alt='hero image' />
        </div>

        <div className='md:w-1/3 flex flex-col  justify-center'>
            <h1 className='text-4xl font-bold'>The Best Coffee in the World</h1>
            <p className='text-lg'>We are a small, family-owned coffee roaster based in the heart of the Pacific Northwest. We roast our coffee in small batches to ensure the highest quality and freshness. We are passionate about coffee and we are excited to share our passion with you.</p>
            <button className=' lg:w-1/4 sm:w-1/3 md:w-1/4 bg-black text-white py-2 px-4 rounded'>Shop Now</button>
        </div>
    </div>
    
  )
}

export default RightBlock