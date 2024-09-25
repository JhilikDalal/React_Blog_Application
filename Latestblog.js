import React from 'react';

const LatestBlog = () => {
  return (
    <div className='Latest-Blog my-8 mx-auto w-9/12 flex flex-col items-center justify-between'>
      <div className='latest-blog-title flex items-center justify-center my-6 text-4xl font-serif'>
        <h1>Latest Blog</h1>
      </div>
      <div className='blog-section flex flex-row gap-5'>
        <div className='latest-blog-items basis-1/4 relative'>
          <img src='./0_edoks6jhZfFaTWNo.jpg' alt='Fashion Blog' />
          <div className='Caption flex flex-col justify-center items-center rounded-md absolute top-0 left-0 bottom-0 right-0'>
            <img src='./magazine.png' alt='Magazine Icon' />
            <h1 className='blog-title text-xl font-normal font-serif'>Fashion Blog</h1>
          </div>
        </div>
        <div className='latest-blog-items basis-1/4 relative'>
          <img src='./10-Easy-Ways-to-Make-Any-Meal-More-Healthy-Featured-Image-1.jpg' alt='Recipe Blog' />
          <div className='Caption flex flex-col justify-center items-center rounded-md absolute top-0 left-0 bottom-0 right-0'>
            <img src='./blend.png' alt='Blender Icon' />
            <h1 className='blog-title text-xl font-normal font-serif'>Recipe Blog</h1>
          </div>
        </div>
        <div className='latest-blog-items basis-1/4 relative'>
          <img src='./blog_6819afeb-a637-4018-b23b-04932c69e19e.jpg' alt='Self-grooming Blog' />
          <div className='Caption flex flex-col justify-center items-center rounded-md absolute top-0 left-0 bottom-0 right-0'>
            <img src='./personal-growth.png' alt='Growth Icon' />
            <h1 className='blog-title text-xl font-normal font-serif'>Self-grooming Blog</h1>
          </div>
        </div>
        <div className='latest-blog-items basis-1/4 relative'>
          <img src='./istockphoto-934918640-612x612.jpg' alt='Self-Care Blog' />
          <div className='Caption flex flex-col justify-center items-center rounded-md absolute top-0 left-0 bottom-0 right-0'>
            <img src='./self.png' alt='Self-care Icon' />
            <h1 className='blog-title text-xl font-normal font-serif'>Self-Care Blog</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
