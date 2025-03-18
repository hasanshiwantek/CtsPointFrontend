import React from 'react'
import LeftMenuBar from './LeftMenuBar'
import HeroSectionMiddle from './HeroSectionMiddle'
import HeroSectionRight from './HeroSectionRight'
const HeroSection = () => {
  return (
    <>
    <main className='flex justify-center  px-12   border-t-[1px] border-gray-200'>
    <LeftMenuBar/>
    <HeroSectionMiddle/>
    <HeroSectionRight/>
    </main>
    </>
  )
}

export default HeroSection