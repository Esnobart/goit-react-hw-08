import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

axios.defaults.baseURL = 'https://65eb44fd43ce1641893399a6.mockapi.io'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: false
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

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data
});

export const addContact = createAsyncThunk('contacts/addContact', async newContact => {
    const response = await axios.post('/contacts', newContact);
    return response.data;
});

export const { pending, success, error } = contactsSlice.actions;

export default contactsSlice.reducer;
