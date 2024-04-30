import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'

const Newsletter = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1400px] mx-auto border-b-2 border-gray py-8 px-4'>
            <div className='col-span-2 py-8 md:pt-2 flex flex-col'>
                <p className='font-bold uppercase text-center'> Sign up to get the latest news on designs and discounts</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email' />
                    <button className='p-2 mb-4 rounded-md hover:scale-110'>Subscribe</button>
                </form>
            </div>

        </div>
        <div className='flex justify-center px-auto text-2xl'>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl '>
          <FaFacebook className='hover:scale-150 hover:text-blue-600' />
          <FaInstagram className='hover:scale-150 hover:text-red-600' />
          <FaTwitter className='hover:scale-150 hover:text-blue-400' />
          <TiSocialPinterest className='hover:scale-150 hover:text-red-800 ' size={30} />
        </div>
        
        </div>
      
    </div>
  )
}

export default Newsletter
