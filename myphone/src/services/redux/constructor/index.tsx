// This slice contains all the phone setting
import {createSlice} from '@reduxjs/toolkit'
// Setting interface
interface construct {
    phoneID:string,
    hour:number,
    minute:number,
    timeString:string
}

const initialState : construct  = {
    phoneID:'0',
    hour:0,
    minute:0,
    timeString:'00:00'
}

 export const constructor = createSlice({
    name:'constructor',
    initialState,
    reducers: {
        phoneIDChange:(state,action) => {
            // Search database
            state.phoneID = action.payload
            // Set ca' nhan hoa' dienthoai
            return state
        },
        timer:(state=initialState,action) => {
            if(state.minute + 1 == 60)
            {
                state.hour += 1
                state.minute=0
            }
            else
                state.minute +=1
            // update timeString
            state.timeString = ('0'+state.hour).slice(-2) + ":" + ('0'+state.minute).slice(-2)
            return state
            // state.timeString = '00:00'
            console.log(JSON.stringify(state))
            // switch(action.type)
            // {
            //     case 'constructor/timer':
            //         {
            //             state.timeString = '00:00'
            //             return state
            //         }
            //     default:
            //         return state;
                
            // }
            // return state
        }
    }
})

export const {phoneIDChange,timer} = constructor.actions
export default constructor.reducer