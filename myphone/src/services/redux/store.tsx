import {configureStore,combineReducers, getDefaultMiddleware, Store} from '@reduxjs/toolkit';
import settingSlice from './setting';
import constructor from './constructor'

// import {persistStore,persistReducer,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,FLUSH} from 'redux-persist'
const rootReducer = combineReducers({
    setting:settingSlice,
    constructor:constructor
} as any)



const store =  configureStore ({
    reducer:rootReducer,
    // middleware: getDefaultMiddleware({
    //     serializableCheck: {
    //         ignoredActions: [REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,FLUSH]
    //     }
    // })
});


// export default configureStore({
//     reducer:{
//         setting:settingSlice
//     }
// })

export default store