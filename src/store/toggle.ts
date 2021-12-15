import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    changeNote: false,
    disableButton: false,
    loginWithPassword: false,
    changePassword: false
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
        enableLoginWithPassword(state) {
            state.loginWithPassword = true
        },
        disableLoginWithPassword(state) {
            state.loginWithPassword = false
        },
        enableChangePassword(state) {
            state.changePassword = true
        },
        disableChangePassword(state) {
            state.changePassword = false
        },
    },
})

export const {
    enableChangeNote,
    disableChangeNote,
    enableButton,
    disableButton,
    enableLoginWithPassword,
    disableLoginWithPassword,
    disableChangePassword,
    enableChangePassword
} = toggleSlice.actions
export const toggleReducer = toggleSlice.reducer