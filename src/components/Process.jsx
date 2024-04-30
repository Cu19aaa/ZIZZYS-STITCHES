import React from 'react'
import pic1 from '../assets/bookaconsultation.png'
import pic2 from '../assets/measurement.png'
import pic3 from '../assets/pricing.png'

const Process = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='text-center sm:text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-black mt-10 mb-10'>How We Work</p>
        </div>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-8'>
            <div className='w-full shadow-xl hover:shadow-black flex flex-col p-4 my-4 rounded-lg duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={pic1} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Book A Consultation</h2>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'> Ready to bring your vision to life? Schedule a consultation with us to discuss your apparel needs and preferences.</p>
                    
                </div>
            </div>

            <div className='w-full shadow-xl hover:shadow-black flex flex-col p-4 my-4 rounded-lg duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={pic2} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Get measurement</h2>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Once you've booked your consultation, visit our studio to get professionally measured. We'll ensure a perfect fit for your bespoke garment.</p>
                    
                </div>
            </div>

            <div className='w-full shadow-xl hover:shadow-black flex flex-col p-4 my-4 rounded-lg duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={pic3} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Agree on Priciing</h2>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>After finalizing your design and measurements, we'll provide a transparent pricing quote based on your specifications. With no hidden costs, you can proceed with confidence knowing exactly what to expect</p>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Process
