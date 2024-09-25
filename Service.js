import React from 'react';
import { FaPaintBrush, FaAppleAlt, FaUserShield } from 'react-icons/fa'; // Import any icons you need

const services = [
  {
    id: 1,
    title: 'Creative Design',
    description: 'We offer innovative and creative design solutions to help you stand out in the crowded market.',
    icon: <FaPaintBrush className="text-4xl text-red-400 mb-4" />
  },
  {
    id: 2,
    title: 'Healthy Recipes',
    description: 'Explore our collection of healthy recipes that are easy to prepare and delicious.',
    icon: <FaAppleAlt className="text-4xl text-red-400 mb-4" />
  },
  {
    id: 3,
    title: 'Personal Coaching',
    description: 'Get one-on-one coaching sessions to help you achieve your personal and professional goals.',
    icon: <FaUserShield className="text-4xl text-red-400 mb-4" />
  },
];

const Service = () => {
  return (
    <div className='py-20 bg-gray-100'>
      <div className='max-w-6xl mx-auto text-center mb-10'>
        <h1 className='text-4xl font-bold mb-6'>Our Services</h1>
        <p className='text-lg text-gray-600'>We provide a range of services to help you achieve your goals.</p>
      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-4'>
        {services.map(service => (
          <div key={service.id} className='bg-white shadow-md rounded-lg p-6 text-center'>
            {service.icon}
            <h3 className='text-2xl font-semibold mb-2'>{service.title}</h3>
            <p className='text-gray-600'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
