import React from 'react'
import Header from './Header'
import Slider from './Slider'
import BigDiscount from './BigDiscount'
import NewArrivals from './NewArrivals'
import BestSales from './BestSales'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <Slider />
      <BigDiscount />
      <NewArrivals />
      <BestSales />
      <Footer />
    </>
  )
}
