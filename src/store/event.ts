import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    event: "",
}


const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEvent(state, action) {
            state.event = action.payload
            console.log('Event changed to', state.event)
        },
    },
})

export const {setEvent} = eventSlice.actions
export const eventReducer = eventSlice.reducer