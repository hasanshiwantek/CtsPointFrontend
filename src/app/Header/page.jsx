import React from 'react'
import MainHeader from '../components/header/MainHeader'
import TopHeader from '../components/header/TopHeader'
import Navbar from '../components/header/Navbar'
const NavBar = () => {
  return (
    <>
    <div>
      <TopHeader/>
        {/* <MainHeader/> */}
        <Navbar/>
    </div>
    </>
  )
}

export default NavBar