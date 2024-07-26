import React from 'react'
import './firstHeroSection.css'
// import gridLines from '../../Assets/grid lines.png'
import blob from '../../Assets/blob.png'
import groupImg from '../../Assets/Group 427319595.png'
import facelity_1 from '../../Assets/Frame 512918684.png'
import facelity_2 from '../../Assets/Frame 512918685.png'
import { FaCircleArrowRight } from "react-icons/fa6";

const firstHeroSection = () => {
  return (
    <div className='first-container bg-black '>
        this is first section
      {/* <img src={gridLines} alt='' loading='lazy'  className='h-full w-full object-cover '/> */}
      <div className='first-headingContainer '>
        <span><h1 className='bg-gradient-to-r from-white via-gray-500 to-indigo-400 inline-block text-transparent bg-clip-text'>EMPOWERING THE DIGITAL ERA:</h1><br /></span>
        <span><h1 className='bg-gradient-to-r from-white via-gray-500 to-indigo-400 inline-block text-transparent bg-clip-text'>DECENTRALIZING ENTERTAINMENT</h1></span>
      </div>
      <div className='blob-container absolute'>
        <span><p>Join the Worlds first DePIN: Revolution Content Streaming With
          faster,safer <br /> and cheaper access</p>
        </span>
        <div className='flex align-baseline ml-[35%] w-[40%] gap-[5px] pl-1'>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full relative w-[28%] pl-1">
            Coming Soon 
          </button>
          <span className='absolute ml-[9%] pt-[0.7rem]'><FaCircleArrowRight /></span>
        </div>
        <img src={groupImg} alt=''  className='h-[60%] w-[100%] object-contain'/>
      </div>
      <div className='facility-container'>
        <div className='first-facility'>
          <img src={facelity_1} alt='' className='h-[100px] ' />
        </div>
        <div className='second-facility'>
        <img src={facelity_2} alt='' className='h-[100px]  ' />
        </div>
      </div>

    </div>
  )
}

export default firstHeroSection
