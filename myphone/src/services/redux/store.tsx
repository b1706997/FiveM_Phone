import {configureStore,combineReducers} from '@reduxjs/toolkit';
import settingSlice from './setting';

const rootReducer = combineReducers({
    setting:settingSlice
} as any)
export default configureStore ({
    reducer:rootReducer
});
// export default configureStore({
//     reducer:{
//         setting:settingSlice
//     }
// })