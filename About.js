import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='py-32 bg-red-400 text-center text-white px-4'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About Us</h1>
        <p className='text-lg lg:text-xl mb-8'>
          Welcome to our blog, where we explore fashion, healthy living, self-care, and personal growth.
        </p>
      </div>

      {/* Main Content Section */}
      <div className='max-w-5xl mx-auto p-6 md:p-8'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Our Mission</h2>
        <p className='text-gray-700 mb-6'>
          Our mission is to inspire and empower individuals to embrace their unique styles, live healthier lives, and prioritize self-care. 
          We believe that everyone deserves to feel confident and beautiful in their own skin.
        </p>

        <h2 className='text-3xl md:text-4xl font-bold mb-6'>What We Offer</h2>
        <ul className='list-disc list-inside mb-6 text-gray-700'>
          <li>Fashion tips and style guides</li>
          <li>Healthy recipes and nutrition advice</li>
          <li>Self-care practices and personal development</li>
          <li>Inspiring stories and community engagement</li>
        </ul>

        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Join Our Community</h2>
        <p className='text-gray-700'>
          We invite you to join our community of like-minded individuals who are passionate about living their best lives. 
          Follow us on social media, subscribe to our newsletter, and be part of our journey!
        </p>
      </div>
    </div>
  );
};

export default About;
