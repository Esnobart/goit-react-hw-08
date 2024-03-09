import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data
});

export const addContact = createAsyncThunk('contacts/addContact', async newContact => {
    const response = await axios.post('/contacts', newContact);
    return response.data;
});