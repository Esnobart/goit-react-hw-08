import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contact: [],
        modalOpen: false
    },
    reducers: {
        changeContact: (state, action) => {
            state.contact = action.payload
            state.modalOpen = true
        },
        closeModal: (state) => {
            state.modalOpen = false
        }
    }
})

export const { changeContact, closeModal } = contactSlice.actions;

export default contactSlice.reducer