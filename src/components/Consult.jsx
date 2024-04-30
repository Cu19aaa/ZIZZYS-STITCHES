import React from 'react'
import pic from '../assets/pic4.png'

const Consult = () => {
  return (
    <div className=' bg-gray-200 mx-auto py-16 px-4 grid lg:grid-cols-2 gap-4 rounded-xl'>
        {/*Left side*/}
        <div className='  flex justify-center items-center'>
            <img className='row-span-4 object-cover w-full h-full p-2' src={pic} alt="/" style={{width:'450px'}} />
         </div>


        {/*Right side*/}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-3xl md:text-6xl font-bold text-left'>Schedule a Consultation</h3>
            <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-2 border-gray-600 py-8 px-4'>
                <div className='m-auto text-center justify-center'>
                    <p className='italic text-center'>Ready to turn your fashion dreams into reality? Schedule a personalized consultation with our expert team today!
                                            Click the button below to book your appointment and take the first step towards owning your bespoke masterpiece.</p>
                    <button className='border-2 border-black mt-5 px-3 py-3 w-[150px] rounded-lg text-white bg-black hover:text-black hover:bg-white hover:scale-110 '>Book Now</button>
                </div>   
                
            </div>
        </div>

         

    </div>
  )
}

export default Consult
