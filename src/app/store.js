import { configureStore } from '@reduxjs/toolkit';
//Slicers
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});