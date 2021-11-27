import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    changeNote: false,
    disableButton: false
}


const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        enableChangeNote(state) {
            state.changeNote = true
        },
        disableChangeNote(state) {
            state.changeNote = false
        },
        enableButton(state) {
            state.disableButton = true
        },
        disableButton(state) {
            state.disableButton = false
        },


    },
})

export const {enableChangeNote, disableChangeNote, enableButton, disableButton} = toggleSlice.actions
export const  toggleReducer = toggleSlice.reducer