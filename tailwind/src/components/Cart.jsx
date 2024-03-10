import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../createSlice/Slice';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate()
    function handelSubmit () {
        navigate('/payment')
    }
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        dispatch(remove(itemId));
    };

    return (
        <div className='flex flex-wrap justify-around gap-20 mt-20'>

            {cartItems.map(item => (
                <div key={item.id} className='bg-black text-white p-8 rounded-lg text-center shadow-lg '>
                    <center>{item.video && <ReactPlayer url={item.video} width={350} height={200} controls />}</center>
                    <b style={{ margin: '10px 0' }}>{item.name}</b><br />
                    <b><strong>{item.subject}</strong></b><br />
                    <b>{item.description}</b><br />
                    <button className='bg-blue-500 text-white rounded-md px-4 py-2 text-base font-semibold transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"' onClick={() => handleRemoveFromCart(item.id)}><img src='https://cdn2.iconfinder.com/data/icons/squircle-ui/32/Trash-64.png'/></button><br /> <br />
                    <button onClick={handelSubmit} className='bg-pink-300 text-white rounded-md px-5 py-2 text-base font-medium transition duration-600 ease-in-out cursor-pointer'>
                        Proceed to pay
                    </button>
                </div>
            ))}

        </div>
    );
}

export default Cart;
