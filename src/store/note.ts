import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    note: "",
}


const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        changeNote(state, action) {
            state.note = action.payload
            console.log('Note changed to', state.note)
        },
    },
})

export const {changeNote} = noteSlice.actions
export const noteReducer = noteSlice.reducer