import React from 'react';

function About() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen mt-24">
      <div className="lg:w-1/2 lg:mt-0 mt-24 lg:mt-50 px-8 lg:px-0 text-center lg:text-left text-gray-800">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">Learn Without Limits</h1>
        <p className="text-lg lg:text-xl mb-8 text-white">
          Welcome! We're thrilled to have you here. At <b className='text-blue-500'>Udemy</b>, we're more than just a company; we're a community driven by passion, innovation, and a shared vision for [describe your mission or purpose]. Our journey began [insert how and when your journey started], with a small team dedicated to [describe your initial goals or aspirations]. Since then, we've grown exponentially, overcoming challenges, celebrating victories, and continuously evolving to meet the needs of our ever-expanding community.
        </p>
      </div>
      <div className="ml-0 lg:ml-8 mt-8 lg:mt-0">
        <img
          src="https://kgrassociates.com/wp-content/uploads/sites/36/2016/06/Happy-Business-Guy.jpg"
          alt="Illustration"
          className="rounded-md shadow-lg"
          style={{ width: 450 }}
        />
      </div>
    </div>
  );
}

export default About;
