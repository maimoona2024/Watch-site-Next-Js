import React from 'react'

const About = () => {
  return (
    <div>
      <section className="bg-[url('/about.png')] bg-cover h-screen bg-center text-white py-20 px-5 flex justify-start items-center">
        <div className='max-w-[500px] text-left bg-[rgba(0,0,0,0.6)] p-[30px] rounded-md'>
          <h2 className='fade-in text-2xl'>About Us</h2>
          <p className='pt-[20px]'>At TimeWell, we believe a watch is more than just an accessory—it's a statement of style, a reflection of personality, and a keeper of life’s most memorable moments. Our passion for craftsmanship and innovation drives us to offer timeless designs that combine classic sophistication with modern functionality.

            Founded with the vision of creating watches that resonate with individuality, we pride ourselves on delivering exceptional quality, durable materials, and impeccable detailing. Whether you're looking for the perfect everyday companion or a timepiece for life’s special occasions, we have something that suits your unique taste.

            Join us on a journey to celebrate the art of timekeeping. TimeWell Watches—because every second counts.

            Timeless design. Exceptional quality. Unmatched style.</p>
        </div>
      </section >
    </div>
  )
}

export default About
