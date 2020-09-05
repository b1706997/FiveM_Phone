// LOGIN REDUCER
import {createSlice} from '@reduxjs/toolkit';

export const authenSlice = createSlice({
    name:'authen',
    initialState: {
        isLoggedIn:false,
        userId:'',
    },
    reducers: {
        login: (state,action) => {
            state.isLoggedIn = true;
            // state.push(action.payload);
            console.log(state);
        }
    }
});

export const {login} = authenSlice.actions;

export default authenSlice.reducer;