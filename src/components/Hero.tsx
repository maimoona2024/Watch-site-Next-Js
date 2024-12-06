import React from 'react'

const Hero = () => {
  return (
    <section className="hero bg-[url('/bg.jpg')] bg-cover h-screen bg-center flex flex-col items-start pl-20 pt-48">
        <h1 className='h1 fade-in text-4xl'>Welcome to Watch World</h1>
        <p className='p text-xl mt-2'>Your one top shop for the best watch.</p>
        <button className='mt-2 px-5 py-2.5 bg-black text-white text-bold rounded-lg transition-colors duration-[500ms] ease-in-out hover:bg-gray-800'>Shop Now</button>
    </section>
  )
}

export default Hero
