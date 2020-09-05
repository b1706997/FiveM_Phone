import {configureStore,combineReducers} from '@reduxjs/toolkit';
import authenSlice from './features/user/authen/index.js';

const rootReducer = combineReducers({
    authen:authenSlice
})
export default configureStore ({
    reducer:rootReducer
});
// export default configureStore({
//     reducer:{
//         authen:authenSlice
//     }
// })