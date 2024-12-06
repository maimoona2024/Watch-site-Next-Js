import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='contact-form max-w-[600px] my-[50px] mx-auto p-[20px] bg-white shadow-xl'>
        <h2 className='fade-in text-2xl'>Contact Us</h2>
        <form>
          <input className='w-full p-[10px] my-2 border border-gray-300 rounded-md'  type="text" placeholder='Full Name' required/>
          <input className='w-full p-[10px] my-2 border border-gray-300 rounded-md'  type="email" placeholder='E-Mail' required/>
          <input className='w-full p-[10px] my-2 border border-gray-300 rounded-md'  type="text" placeholder='Phone Number' />
          <textarea className='w-full p-[10px] my-2 border border-gray-300 rounded-md'  placeholder='Your Message Here' rows={5} required></textarea>
          <button className='py-[10px] px-[20px] bg-black text-white rounded-md w-full hover:bg-gray-900' type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
