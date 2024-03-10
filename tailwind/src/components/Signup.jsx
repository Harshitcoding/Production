import React, { useState } from 'react';

function Signup() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!user || !email || !password) {
      alert("All fields are required");
      return; // Exit the function if any field is missing
    }

    fetch("http://localhost:3000/signup", {  // Replace this URL with your backend URL
      method: "POST",
      body: JSON.stringify({
        username: user, // Changed 'users' to 'username'
        email: email,
        password: password
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(async function (res) {
        if (res.ok) {

          // If response status is 200-299 (success), display success message
          alert("User created successfully");
          window.location.href = "/";
        } else {
          // If response status is not in the success range, display error message
          const errorData = await res.json();
          alert(`Error: ${errorData.message}`);
        }
      })
      .catch(function (error) {
        // Handle network errors or other exceptions
        console.error("Error:", error);
        alert("An error occurred while processing your request.");
      });
  };



  return (
    <div>
      <div>
        <div className="bg-white relative lg:py-20">
          <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
            <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
              <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                  <img
                    src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                    alt="Signup Illustration"
                  />
                </div>
              </div>
              <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                  <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                    Sign up for an account
                  </p>
                  <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                    <div className="relative">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Username
                      </p>
                      <input
                        required
                        placeholder="John"
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="relative">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Email
                      </p>
                      <input
                        required
                        placeholder="123@ex.com"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="relative">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Password
                      </p>
                      <input
                        required
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="relative">
                      <a
                        className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                        onClick={handleSubmit}
                      >
                        Submit
                      </a>
                    </div>
                  </div>
                </div>
                <svg viewBox="0 0 91 91" className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300 fill-current">
                  {/* SVG content */}
                </svg>
                <svg viewBox="0 0 91 91" className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500 fill-current">
                  {/* SVG content */}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
