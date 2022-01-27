import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'


export default configureStore({
    reducer: { // function that control state
        counter: counterReducer
    }
})