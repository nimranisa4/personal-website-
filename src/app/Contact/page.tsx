import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className=' flex items-center justify-center min-h-screen bg-black text-white  '>
                <div className='container mx-auto max-w-md '>
                    <h1 className='text-4xl font-bold mb-8 text-center'>
                        &lt;Contact Me /&gt;
                    </h1>
                   
                        <form action="" className='space-y-6 '>
                            <div>
                                <label className='block mb-2'>Name</label>
                                <input type="text" 
                                id='name'
                                className='w-full px-4 py-2 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500' />
                            </div>
                            <div>
                                <label htmlFor="email"
                                className='block mb-2'
                                >Email</label>
                                <input type="email" className='w-full px-4 py-2 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>Message</label>
                                <textarea id='message' className='w-full px-4 py-2 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'></textarea>
                            </div>
                            <button type='submit'
                            className='w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            
            <Footer />
        </div >
    )
}

export default Contact