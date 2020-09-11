import {configureStore,combineReducers,createSerializableStateInvariantMiddleware,getDefaultMiddleware} from '@reduxjs/toolkit';
import settingSlice from './setting';
import constructor from './constructor'

// import {persistStore,persistReducer,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,FLUSH} from 'redux-persist'
const rootReducer = combineReducers({
    setting:settingSlice,
    construct:constructor
} as any)


const serializableCheck = createSerializableStateInvariantMiddleware()
const store =  configureStore ({
    reducer:rootReducer,
    middleware: []
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