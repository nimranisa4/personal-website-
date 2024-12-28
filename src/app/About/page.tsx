import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center mt-0   p-1 '>
        <h1 className='text-6xl font-bold mb-6 text-center text-pink-600'>&lt;About me/&gt;</h1>
        <div className='max-w-2xl text-center mb-8 '>
          <p  className='text-lg mb-8'>
            Hello! I'm Nimra Nisa, a passionate developer with a keen interest in creating innovative solutions.
            With a background in computer science and a love for problem-solving, I strive to build applications
            that make a difference in people's lives.
          </p>
          <p className='text-lg '>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or enjoying a good book. I believe in continuous learning and am always excited to take on new challenges.
          </p>
        </div>

        <div className='flex justify-center space-x-4'>
          <Link href="/Protfolio" className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>View Protfolio</Link>
          <Link href="/Contact" className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Contact Me</Link>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  )
}

export default page