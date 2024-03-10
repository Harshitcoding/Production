import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Teachonudemy from './components/Teach on udemy';
import Login from './components/Login';
import Signup from './components/Signup';

import Cart from './components/Cart';
import Mylearning from './components/Mylearning';
import Uploded from './components/Uploded';
import Courses from './components/Courses';
import { Provider} from 'react-redux';
import store from './createSlice/store'; // Import the Redux store
import Payment from './components/Payment';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Teach-on-udemy' element={<Teachonudemy />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/payment' element = {<Payment/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/my-learning' element={<Mylearning />} />
          <Route path='/uploded' element={<Uploded />} />
          <Route path='/courses' element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

function AppBar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigates = useNavigate();

  return (
    <div className='bg-slate-500'>
      <div className='px-4 py-2 md:px-6 flex items-center justify-between'>
        <div className='mr-4 md:1 mix-blend-multiply'>
          <img src='udemy.png' alt='Udemy Logo' />
        </div>
        <div className='flex md:hidden'>
          <button className='text-white' onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <div className={`md:flex items-center space-x-4 ${isMenuOpen ? 'flex flex-col md:flex-row' : 'hidden'}`}>
          <button className='text-white' onClick={() => navigates('/')}>
            Home
          </button>
          <button className='text-white' onClick={() => navigates('/about')}>
            About
          </button>
          <button className='text-white' onClick={() => navigates('/my-learning')}>
            Purchased
          </button>
          <button className='text-white' onClick={() => navigates('/courses')}>
            Courses
          </button>
          <button className='text-white' onClick={() => navigates('/teach-on-udemy')}>
            Teach on Udemy
          </button>
          <button className='text-white' onClick={() => navigates('/uploded')}>
            Uploaded
          </button>
          
          <button onClick={() => navigates('/cart')}>
            <img  src='cart.png' alt='Cart'/>
          </button>
          <button className='text-white' onClick={() => navigates('/login')}>
            Login
          </button>
          <button className='text-white' onClick={() => navigates('/signup')}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
