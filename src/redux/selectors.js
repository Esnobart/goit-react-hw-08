import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items

const selectFilter = state => state.filters.name;

export const selectLoading = (state) => state.contacts.loading

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
);