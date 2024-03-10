import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  courses: JSON.parse(localStorage.getItem('courses')) || [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(action.payload);
      localStorage.setItem('courses', JSON.stringify(state.courses)); 
    },
    removeCourse: (state, action) => {
      state.courses.splice(action.payload, 1);
      localStorage.setItem('courses', JSON.stringify(state.courses));
    },
  },
});

export const { addCourse, removeCourse } = formSlice.actions;
export default formSlice.reducer;


