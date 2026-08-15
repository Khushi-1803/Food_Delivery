import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import Loop from '../components/Loops'



const Home = () => {
  return (
    <>
      <MainBanner />
      <Categories />
      <BestSeller />
      <Loop />
      
    </>
  )
}

export default Home