import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='py-40 bg-red-400 text-center text-white px-4'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Us</h1>
        <p className='text-lg mb-8'>We'd love to hear from you!</p>
      </div>

      <div className='max-w-3xl mx-auto py-10 px-4'>
        <form className='bg-white shadow-md rounded-lg p-8'>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-700 font-semibold mb-2'>Name</label>
            <input
              type='text'
              id='name'
              required
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>Email</label>
            <input
              type='email'
              id='email'
              required
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='message' className='block text-gray-700 font-semibold mb-2'>Message</label>
            <textarea
              id='message'
              required
              rows='5'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            ></textarea>
          </div>

          <button
            type='submit'
            className='w-full bg-red-400 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
