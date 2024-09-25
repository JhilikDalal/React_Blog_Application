import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Singleblog = () => {
  const { id } = useParams(); // Fetch the blog ID from the URL

  // Sample blogs data (including images)
  const blogs = [
    { id: 1, title: 'Fashion Blog', content: 'Detailed content about fashion trends. Discover how to style different outfits and stay in tune with the latest fashion movements.', image: `${process.env.PUBLIC_URL}/0_edoks6jhZfFaTWNo.jpg` },
    { id: 2, title: 'Healthy Recipes', content: 'Explore delicious and easy-to-make healthy recipes. These meals will keep you energized and fit.', image: `${process.env.PUBLIC_URL}/eating_healthy_in_addiction_recovery.jpg` },
    { id: 3, title: 'Self Grooming', content: 'Self-grooming tips and tricks to help you look and feel your best every day. Stay on top of your grooming game with simple habits.', image: `${process.env.PUBLIC_URL}/0_fFesVQ6bwLBqbG7s.jpg` },
    { id: 4, title: 'Self Care', content: 'Learn how to prioritize self-care for both your body and mind. Here are practices that will help you recharge and maintain a balanced life.', image: `${process.env.PUBLIC_URL}/istockphoto-934918640-612x612.jpg` },
    { id: 5, title: 'Choose Products Correctly', content: 'Choosing the right products for your skin can be tricky. Here’s a guide to help you make informed decisions and find the best products for your skin type.', image: `${process.env.PUBLIC_URL}/Natural-beauty-products-are-often-more-eco-friendly-and-cruelty-free.jpg` },
    { id: 6, title: 'Love Yourself', content: 'Loving yourself is the first step towards a happier life. This blog explores how you can embrace self-love and nurture your mental health.', image: `${process.env.PUBLIC_URL}/Self-Discovery-Journal-Prompts-1080x675.png` },
  ];

  // Find the specific blog by ID
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  // Filter related posts (excluding the current one)
  const relatedPosts = blogs.filter((relatedBlog) => relatedBlog.id !== parseInt(id));

  return (
    <div className="max-w-screen-lg mx-auto p-4" style={{ paddingTop: '80px' }}>
      {/* Ensure content starts below the navbar */}
      {blog ? (
        <div className="flex flex-col lg:flex-row">
          {/* Main blog content */}
          <div className="lg:w-2/3">
            <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-lg mb-6" />
            <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
            <p className="text-lg leading-relaxed mb-6">{blog.content}</p>
          </div>

          {/* Sidebar with related posts */}
          <div className="lg:w-1/3 lg:pl-6 mt-6 lg:mt-0">
            <h3 className="text-2xl font-bold mb-4">Related Posts</h3>
            {relatedPosts.map((relatedBlog) => (
              <div key={relatedBlog.id} className="mb-4">
                <Link to={`/blog/${relatedBlog.id}`} className="flex items-center space-x-4">
                  <img src={relatedBlog.image} alt={relatedBlog.title} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h4 className="font-semibold hover:text-red-400">{relatedBlog.title}</h4>
                    <p className="text-sm text-gray-600">{relatedBlog.content.slice(0, 60)}...</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-xl text-red-500">Blog post not found.</p>
      )}
    </div>
  );
};

export default Singleblog;
