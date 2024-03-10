import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../createSlice/Slice';
import ReactPlayer from 'react-player';

const Teachers = [
    {
        id: 2,
        name: "Jane Smith",
        subject: "data analytics",
        description: "Passionate MERN stack developer with a knack for problem-solving.",
        video: "https://www.youtube.com/watch?v=iu-LBY7NXD4",
        price: 100
    },
    {
        id: 3,
        name: "polka dot",
        subject: "full stack",
        description: "Passionate MERN stack developer with a knack for problem-solving.",
        video: "https://www.youtube.com/watch?v=gfGULxgjOhY",
        price: 100
    },
    {
        id: 4,
        name: "smith",
        subject: "MERN stack",
        description: "Passionate MERN stack developer with a knack for problem-solving.",
        video: "https://www.youtube.com/watch?v=1xD7IqFO9L8",
        price: 100
    },
    {
        id: 5,
        name: "sam altman",
        subject: "MERN stack",
        description: "Passionate MERN stack developer with a knack for problem-solving.",
        video: "https://www.youtube.com/watch?v=NEsDfUqede8",
        price: 100
    }
];

function Courses() {
    const dispatch = useDispatch();

    const handleAddToCart = (teacher) => {
        dispatch(add(teacher));
    };

    return (
        <div style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '20px'
        }}>
            {Teachers.map(teacher => (
                <div key={teacher.id} style={{
                    backgroundColor: '#000000',
                    color: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
                }}>

                    {/* Render ReactPlayer for video preview */}
                    <center>  <ReactPlayer url={teacher.video} width={350} height={200} controls /></center>

                    <b style={{ margin: '10px 0' }}>{teacher.name}</b>
                    <p><strong>{teacher.subject}</strong></p>
                    <p>{teacher.description}</p>
                    <p>${teacher.price}</p>
                    <button onClick={() => handleAddToCart(teacher)} className='"mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Courses;
