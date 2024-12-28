import React from 'react'
import Navbar from '../components/Navbar'

const Skills = () => {
    const skills =[
        {name: 'Next.js ' , icon: "⚛️"},
        {name: 'React ' , icon: "⚛️"},
        {name: 'Typescript ' , icon: "🔷"},
        {name: 'Shadcn UI ' , icon: "🎨"},
        {name: 'Auternity ' , icon: "🖼"},
        {name: 'Tailwind CSS ' , icon: "🎨"},
    ];
    return (
        <>
        <Navbar/>
            <div className='min-h-screen bg-black text-white'>
                <h1 className='text-4xl font-bold mb-8 text-center'>&lt;Skills/&gt;</h1>

                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {skills.map((skill, index) => (
                        <div key={index} className='bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-pink-500/50 transition duration-300'>
                            <div className='text-4xl ,b-2'>
                                {skill.icon}

                            </div>
                            <h2 className='text-4xl mb-2'>{skill.name} </h2>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-pink-500 h-2.5 rounded-full' style={{ width: '90%' }}>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills