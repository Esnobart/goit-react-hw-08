import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from "./operation";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: false,
        
    },
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, state => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteContact.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.items = state.items.filter(contact => contact.id !== action.payload.id)
            })
            .addCase(deleteContact.rejected, () => { })
            .addCase(addContact.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.items.push(action.payload)
            })
            .addCase(addContact.rejected, () => { })
})

export const { pending, success, error } = contactsSlice.actions;

export default contactsSlice.reducer;
