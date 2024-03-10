import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCourse } from '../createSlice/formSlice';
import ReactPlayer from 'react-player'; // Import ReactPlayer

const Uploded = () => {
  const { courses } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeCourse(index)); // Dispatch action to remove course from Redux store
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
      {courses.map((course, index) => (
        <div key={index} className="bg-black rounded-lg shadow-md p-4 " style={{ color: 'white' }}>
          {/* Log video URL for debugging */}
          {console.log("Video URL:", course.video)}
          {/* Render ReactPlayer if video URL exists */}
          {course.video &&
            <ReactPlayer
              url={course.video}
              controls
              className="mx-auto md:w-1/2 lg:w-2/3 xl:w-3/4"
              width="350px" // Default width for small devices
            // Medium device width // Extra-large device width
            />
          }
          <h2 className="text-xl text-white font-semibold mb-2">{course.title}</h2>
          <p className="text-white mb-2">{course.description}</p>
          <p className="text-blue-500 font-semibold" >{course.price}</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemove(index)}><img src='trash-2.png' /></button>
        </div>
      ))}
    </div>
  );
};

export default Uploded;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeCourse } from '../createSlice/formSlice';
// import ReactPlayer from 'react-player'; // Import ReactPlayer

// const Uploded = () => {
//   const { courses } = useSelector((state) => state.form);
//   const dispatch = useDispatch();

//   const handleRemove = (index) => {
//     dispatch(removeCourse(index)); // Dispatch action to remove course from Redux store
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
//       {courses.map((course, index) => (
//         <div key={index} className="bg-black rounded-lg shadow-md p-4 " style={{ color: 'white' }}>
//           {/* Render ReactPlayer if video URL exists */}
//           {course.video &&
//             <ReactPlayer
//               url={course.video}
//               controls
//               className="mx-auto md:w-1/2 lg:w-2/3 xl:w-3/4"
//               width="350px" // Default width for small devices
//               // Medium device width // Extra-large device width
//             />
//           }
//           <h2 className="text-xl text-white font-semibold mb-2">{course.title}</h2>
//           <p className="text-white mb-2">{course.description}</p>
//           <p className="text-blue-500 font-semibold" >{course.price}</p>
//           <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemove(index)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Uploded;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import ReactPlayer from 'react-player'; // Import ReactPlayer

// const Uploded = () => {
//   const { courses } = useSelector((state) => state.form);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
//       {courses.map((course, index) => (
//         <div key={index} className="bg-black rounded-lg shadow-md p-4 " style={{
//           color : 'white'
//         }}>
//           {/* Render ReactPlayer if video URL exists */}
//           {course.video && <ReactPlayer
//     url={course.video}
//     controls
//     className="mx-auto md:w-1/2 lg:w-2/3 xl:w-3/4"
//     width="350px" // Default width for small devices
//     // Medium device width // Extra-large device width
// />}
//           <h2 className="text-xl text-white font-semibold mb-2">{course.title}</h2>
//           <p className="text-white mb-2">{course.description}</p>
//           <p className="text-blue-500 font-semibold" >{course.price}</p>
//           <button className='"mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Purchase</button>
//         </div>
//       ))}
//     </div>
//   );
// };


// export default Uploded;
