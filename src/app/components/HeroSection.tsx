import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import React from 'react';

const HeroSection = () => {
    return (
        <div className='min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center p-8 relative '>

            <div className='md:w-1/2 ml-6 mr-8 text-center md:text-left mb-8 md:mb-0 relative z-10'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>Hello , I'm <span className="text-pink-600" >Nimra Nisa</span> </h1>
                <h2 className='text-2xl md:text-3xl font-semibold mb-4'>Frontend developer</h2>
                <p className='text-lg mb-6'>
                    Passionate about creating beautiful and the functional web experiences, love  turning ideas into reality through code.
                </p>
                <div className='relative inline-block'>
                    
                    <div className='absolute -inset-1 bg-pink-500 rounded-full blur opacity-75'></div>
                    <Link href="/About" className='relative bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300'>
                        Learn More About Me
                    </Link>
                </div>
            </div>
            <div className='md:w-1/2 relative flex justify-end lg:ml-16 '>
                <div className=' relative overflow-hidden'>
                  <Image
                  src="/circle.png" 
                  alt="backgrounf picture"
                  width={400}
                  height={400}
                  className=''
                  />
                    <Image
                        src="/profile.png"
                        alt="profile"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4'>
                <SocialLink href="https://www.linkedin.com/in/armin-nisa-37365920b/" icon={<FaLinkedin />} />
                <SocialLink href="https://github.com/nimranisa4" icon={<FaGithub />} />
                <SocialLink href="https://www.facebook.com/" icon={<FaFacebook />} />
                <SocialLink href="https://www.instagram.com/armin___nisa/" icon={<FaInstagram />} />

            </div>

        </div>

    )
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50">
            <span className="text-white hover:text-black transition-colors duration-300">
                {icon}
            </span>
        </div>
    </Link>
);

export default HeroSection;