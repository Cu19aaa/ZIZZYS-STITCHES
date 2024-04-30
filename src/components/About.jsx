import React from 'react'
import { useSpring, animated } from 'react-spring';
import pic1 from '../assets/second1.png';
import pic2 from '../assets/second2.png';
import pic3 from '../assets/second3.png';


const About = () => {
    const props = useSpring({
        opacity:1,
        from: { opacity: 0 },
        config: { tension: 280, friction:60},
    });

  return (
    <animated.div name='about' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4' style={props}>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-6 object-cover w-full h-full p-2' src={pic1} alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={pic2} alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={pic3} alt="/" />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold text-center'>About The Business</h3>
        <p className='text-2xl py-6 text-center'>Welcome To Zizzys Stitches</p>
        <p className='pb-6 text-xl pl-10 text-center'>Welcome to Zizzy's Stitches, your premier destination for bespoke apparel crafted with care and precision.
         At Zizzy's, we specialize in creating exquisite traditional attire tailored to perfection for individuals of all ages, including 
         men, women, and children. Our dedication to craftsmanship shines through in every garment we create, as we pour our passion into
         crafting timeless pieces that exude elegance and sophistication. But our expertise doesn't stop there. We thrive on curating
         personalized ensembles for special occasions, whether it's for weddings, bridal parties, or simply to elevate your everyday wardrobe.
          With meticulous attention to detail and a keen eye for design, we ensure that each piece we create reflects the unique style and 
          personality of our clients. At Zizzy's Stitches, we believe that clothing is more than just fabric and thread; it's a form of
           self-expression and a reflection of your individuality. Let us help you make a statement with our exceptional craftsmanship
            and unwavering commitment to quality. Step into a world of timeless elegance and sartorial excellence with Zizzy's Stitches.
          </p>
      </div>
    </animated.div>
  )
}

export default About
