import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slice'
import formReducer from './formSlice';
const store = configureStore ({
    reducer : {
        cart : cartReducer,
        form: formReducer
    }
})

export default store