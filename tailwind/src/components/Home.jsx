import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate('/signup');
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen">
      <div className="lg:w-1/2 text-center lg:text-left text-white lg:mt-0 mt-24 lg:mt-50">
        <div className="text-6xl font-bold">Learn Without Limits</div>
        <br />
        <div className="text-xl lg:text-lg">
          Start, switch, or advance your career with more than 6,900 courses, Professional Certificates, and degrees from world-class universities and companies.
        </div>
        <button onClick={handleSubmit} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join for Free
        </button>
      </div>
      <div className="ml-0 lg:ml-8 mt-8 lg:mt-0 illustration-container">
        <img
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5CFC8u8XiXcbSOlVv6JZQx/4e6f898f57f9d798437b3aa22026e30b/CourseraLearners_C_Composition_Hillary_copy__3_.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40"
          alt="Illustration"
          className="rounded-md shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
