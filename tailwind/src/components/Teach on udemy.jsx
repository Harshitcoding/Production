import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../createSlice/formSlice';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Teachonudemy = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch(addCourse({ title, description, video: videoUrl, price }));
    navigate('/uploded');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-44">
      <h1 className='text-center mb-10 text-6xl text-white'>Upload Course</h1>

      <input
        type="text"
        required
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full"
      />
      <textarea
        required
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full resize-none"
        rows="4"
      ></textarea>
      <input
        required
        type='number'
        placeholder='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full"
      />



      <input
        required
        type="file"
        id="video-upload"
        onChange={handleImageChange}
        className="mb-4"
      />



      <button type="submit" className="bg-blue-500 text-white font-bold py-1 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default Teachonudemy;
