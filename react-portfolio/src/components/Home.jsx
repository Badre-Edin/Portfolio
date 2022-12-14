import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Photo from '../assets/photo.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 sm:text-3xl'>Hi, my name is</p>
        {/* <img className='w-20 mx-auto' src={Photo} alt="photo" /> */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Badreddine Dridi
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack JavaScript Web Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am a full stack javascript web developer ,I am an energetic person, an effective communicator.
          I worked on various projects related to the software domain in RBK which provided me a great deal of technical exposure along with the importance of working in a team.
          I'm looking for a job for develop my personal knowledge.
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
