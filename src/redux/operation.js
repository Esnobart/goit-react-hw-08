import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}

export const register = createAsyncThunk('auth/register', async (details, thunkAPI) => {
    try {
        const response = await axios.post('/users/singup', details);
        setAuthHeader(response.data.token);
        return response.data
    } catch (err) {return thunkAPI.rejectWithValue(err.message)}
})

export const logIn = createAsyncThunk('auth/login', async (details, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', details);
        setAuthHeader(response.data.token);
        return response.data
    } catch (err) {return thunkAPI.rejectWithValue(err.message)}
})

export const logOut = createAsyncThunk('auth/logout', async (details, thunkAPI) => {
    try {
        await axios.post('/users/logout', details);
        clearAuthHeader();
    } catch (err) {return thunkAPI.rejectWithValue(err.message)}
})

export const currentUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user')
    }

    try {
        setAuthHeader(persistedToken);
        const response = await axios.get('users/current');
        return response.data;
    } catch (err) {return thunkAPI.rejectWithValue(err.message)}
})


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