import { createSlice } from "@reduxjs/toolkit";
// import contactData from "../contactData.json";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;
