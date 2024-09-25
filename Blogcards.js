import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; 

const Blogcards = () => {
  const blogs = [
    { id: 1, title: 'Fashion Blog', description: 'Discover the latest trends in fashion...', imgSrc: './0_edoks6jhZfFaTWNo.jpg' },
    { id: 2, title: 'Healthy Recipes', description: 'Delicious and easy recipes...', imgSrc: './10-Easy-Ways-to-Make-Any-Meal-More-Healthy-Featured-Image-1.jpg' },
    { id: 3, title: 'Self Grooming', description: 'Tips and tricks for grooming...', imgSrc: './blog_6819afeb-a637-4018-b23b-04932c69e19e.jpg' },
    { id: 4, title: 'Self Care', description: 'Practice self-care for your body...', imgSrc: './istockphoto-934918640-612x612.jpg' },
    { id: 5, title: 'Choose Products Correctly', description: 'Pick the best products for...', imgSrc: './Natural-beauty-products-are-often-more-eco-friendly-and-cruelty-free.jpg' },
    { id: 6, title: 'Love Yourself', description: 'Practice self-care and self-love...', imgSrc: './Self-Discovery-Journal-Prompts-1080x675.png' }
  ];

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:mx-32 sm:mx-20 mx-10">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white shadow-md rounded-lg p-4">
          <img src={blog.imgSrc} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className='mt-4 mb-2 font-bold hover:text-red-400 cursor-pointer'>{blog.title}</h3>
          <p className='mb-2 text-gray-600'>{blog.description}</p>
          <button>
            <Link to={`/blog/${blog.id}`} className="font-medium hover:text-red-400 inline-flex items-center">
              Read More <FaArrowRight className='ml-2' />
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blogcards;
