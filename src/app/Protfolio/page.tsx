import React from 'react';
import Image from "next/image";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link';

const page = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-black text-white p-8'>
                <h1 className='text-4xl font-bold mb-8 text-center'>&lt;Portfolio/&gt;</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-8 '>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60 '>
                        

                        <div className='p-6 '>
                            <h1 className='text-3xl font-bold mb-2'>furniro-e-commerce Website</h1>
                            <p className='text-gray-300 mb-4'>This website that i used the next.js concepts and also used the tailwind.css & figma </p>
                            <Link href='https://vercel.com/nimranisa4s-projects/update-furniro-e-commerce' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>


                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>resume build</h1>
                            <p className='text-gray-300 mb-4'>This  resume build, i used the next.js concepts Like usestate and the useEffect and also used the tailwind.css</p>
                            <Link href='https://vercel.com/nimranisa4s-projects/resume-builder' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>


                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>milestone-editable-resumebulider</h1>
                            <p className='text-gray-300 mb-4'>This the milestone-editable-resumebulider that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://milestone-editable-resumebulider-by-nimranisa-lvgk.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>


                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>book api</h1>
                            <p className='text-gray-300 mb-4'>This the book api that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://vercel.com/nimranisa4s-projects/giaic-assignment-11-su6j/EUDPpGYABYxwQRXozzty3bhvahzV' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>


                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>dream car Website</h1>
                            <p className='text-gray-300 mb-4'>This the dream car website that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://vercel.com/nimranisa4s-projects/hackathone-milestone-3' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>


                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>portfolio website</h1>
                            <p className='text-gray-300 mb-4'>This the Portfolio website that i used the simple HTML , CSS and java</p>
                            <Link href='https://vercel.com/nimranisa4s-projects/mile-stone-1-portfolio-wdkt' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default page