import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import Blogcards from './Blogcards';
import Sidebar from './Sidebar';

const Home = () => {
  const categories = ["Fashion", "Recipes", "SelfCare", "SelfGrooming"];
  return (
    <>
      <div className='px-4 py-32 bg-red-400 mx-auto'>
        <div className='text-white text-center'>
          <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome To My Blog</h1>
          <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>
            <span className='text-center text-slate-900 font-bold text-xl'>We’re so glad you’ve found us!</span>
            <br />At Meghbalikas, we dive deep into everything fashion, style, recipes, and lifestyle growth to help you live your best life.
            Whether you're looking for the latest fashion trends, fresh style inspiration, mouthwatering recipes, or tips on personal growth, you’re in the right place.
          </p>
          <div>
            <Link to="/" className="font-medium hover:text-slate-900 inline-flex items-center">
              Learn More <FaArrowRight className='mt-1 ml-2' />
            </Link>
          </div>
        </div>
      </div>

      {/* Category section */}
      <nav className='text-center lg:space-x-16 flex justify-center border-b-2 py-3'>
        <div className='inline-flex gap-6'>
          <button className='font-medium hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition duration-300'>
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className='font-medium hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition duration-300'
              aria-label={`Filter by ${category}`}>
              {category}
            </button>
          ))}
        </div>
      </nav>

      <div className='flex flex-col lg:flex-row lg:space-x-8 mx-auto px-4 lg:px-0 mt-8'>
        {/* Blogcards and Sidebar responsive layout */}
        <div className='lg:w-2/3'>
          <Blogcards />
        </div>
        <div className='lg:w-1/3 mt-8 lg:mt-0'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Home;
