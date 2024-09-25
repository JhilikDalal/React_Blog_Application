import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  // Fetch blogs (example placeholder, replace with actual API call)
  useEffect(() => {
    const fetchBlogs = async () => {
      // Replace with actual API fetch logic
      const blogs = [
        { id: 1, title: "How to grow Yourself", description: "Learn the steps to personal growth." },
        { id: 2, title: "Fashion Trends 2024", description: "What's trending in the fashion world." },
        { id: 3, title: "Delicious Healthy Recipes", description: "Top recipes to boost your health." },
        { id: 4, title: "Choose the Right Product for Your Skin", description: "The right product gives you healthy skin." },
        { id: 5, title: "How to Follow a Healthy Lifestyle Routine", description: "The key to a balanced day is a healthy lifestyle routine." },
        { id: 6, title: "How to Manage Your Time Every Day", description: "Tips to manage your time effectively." }
      ];
      setPopularBlogs(blogs);
    };
    fetchBlogs();
  }, []);

  return (
    <div className='flex flex-col justify-start px-4'>
      <div className='mb-4'>
        <h3 className='text-2xl font-semibold'>Latest Blogs</h3>
      </div>
      
      {/* Blog List */}
      {popularBlogs.map((blog) => (
        <article key={blog.id} className='mb-6 border-b-2'>
          <h5 className='font-bold text-lg'>{blog.title}</h5>
          <p className='text-sm text-gray-600'>{blog.description}</p>
          <Link 
            to={`/blog/${blog.id}`} 
            className="font-medium text-red-400 hover:text-red-400 inline-flex items-center mt-2">
            Read More <FaArrowRight className='ml-2' />
          </Link>
        </article>
      ))}

      {/* Static content if needed */}
      {popularBlogs.length === 0 && <p>No blogs available yet.</p>}
    </div>
  );
};

export default Sidebar;
