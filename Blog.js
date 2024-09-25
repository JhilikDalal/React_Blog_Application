import React from 'react';
import Blogcards from './Blogcards';
import Sidebar from './Sidebar';

const Blog = () => {
  const categories = ["Fashion", "Recipes", "SelfCare", "SelfGrooming"];
  
  return (
    <div>
      {/* Header section */}
      <header className='py-32 bg-red-400 text-center text-white px-4'>
        <h1 className='text-3xl lg:text-7xl leading-snug font-bold mb-5'>Welcome To Our Blog Page</h1>
      </header>
      
      {/* Category section */}
      <nav className='text-center lg:space-x-16 flex justify-center border-b-2 py-3'>
        {/* Category Buttons */}
        <div className='inline-flex gap-6'>
          <button className='font-medium hover:text-red-400 border-b-2 border-transparent hover:border-red-400 transition duration-300'>
            All
          </button>
          {categories.map((category) => (
            <button 
              key={category} 
              className='font-medium hover:text-red-400 border-b-2 border-transparent hover:border-red-400 transition duration-300'
              aria-label={`Filter by ${category}`}>
              {category}
            </button>
          ))}
        </div>
      </nav>
      
      {/* Blog cards section */}
      <main className='flex flex-col lg:flex-row px-4 py-8 lg:space-x-8'>
        {/* Blogcards */}
        <div className='lg:w-2/3'>
          <Blogcards />
        </div>

        {/* Sidebar with margin-left */}
        <aside className='lg:w-1/3 mt-8 lg:mt-0'>
          <Sidebar />
        </aside>
      </main>
    </div>
  );
};

export default Blog;
