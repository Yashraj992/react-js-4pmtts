import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer p-24 text-white flex justify-around">
        <ul className='footer-data'>
            <h1 className='text-white text-4xl font-semibold p-2'>Multimart</h1>
            <p className='f-text mt-2 p-2'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Explicabo nostrum repellendus iste <br /> nemo quasi sequi voluptate aliquid dicta <br /> magnam eligendi inventore ea nesciunt accusantium <br /> ipsam hic est, laudantium illum quidem.</p>
        </ul>

        <ul className='footer-data1'>
            <li className='text-xl font-semibold'>About Us</li>
            <li className='f-text mt-2'>Careers</li>
            <li className='f-text mt-2'>Our Stores</li>
            <li className='f-text mt-2'>Our Cares</li>
            <li className='f-text mt-2'>Terms & Conditions</li>
            <li className='f-text mt-2'>Privacy Policy</li>
        </ul>

        <ul className='footer-data1'>
            <li className='text-xl font-semibold'>Customer Care</li>
            <li className='f-text mt-2'>Help Center</li>
            <li className='f-text mt-2'>How To Buy</li>
            <li className='f-text mt-2'>Track Your Order</li>
            <li className='f-text mt-2'>Corporate & Bulk Purchasing </li>
            <li className='f-text mt-2'>Returns & Refunds</li>
        </ul>

        <ul className='footer-data1'>
            <li className='text-xl font-semibold'>Contact Us</li>
            <li className='f-text mt-2'>70 Washington Square South, New York, <br /> NY 10012, United States</li>
            <li className='f-text mt-2'>Email: uilib.htlp@gmail.com</li>
            <li className='f-text mt-2'>Phone: +91 9723411456</li>
        </ul>
      </div>
    </>
  )
}
