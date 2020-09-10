// This slice contains all the phone setting
import {createSlice} from '@reduxjs/toolkit'
import { useTranslation } from 'react-i18next'
// Setting interface
interface setting {
    phoneID:string,
    language:string,
    font: 'small' | 'medium' | 'big',
    
}

const initialState : setting = {
    phoneID:'0',
    language:'vn',
    font: 'small'
}

 export const settingSlice = createSlice({
    name:'setting',
    initialState,
    reducers: {
        phoneIDChange:(state,action) => {
            // Search database
            state.phoneID = action.payload
            // Set ca' nhan hoa' dienthoai
        },
        languageChange:(state,action) => {
            // Language switcher
            const { t, i18n } = useTranslation()
            state.language = action.payload // Change the current language of the phone
        },
        fontChange:(state,action) => {
            state.font = action.payload // Change the current font size of the phone
        }
    }
})

export const {phoneIDChange,languageChange,fontChange} = settingSlice.actions

export default settingSlice.reducer