import { IContact } from "../../types";
import initialState from "./initialState";
import { getContacts, deleteContact } from "./thunks";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contactsStore",
  initialState,
  reducers: {
 
    setContact: (state, action: PayloadAction<string | number>) => {
      state.contact = state.contacts.filter((contact: IContact) => {
        return contact.id === action.payload;
      })[0];
    },

    addContact: (state, action: PayloadAction<IContact>) => {
      const newContactsList = [action.payload, ...state.contacts];
      state.contacts = newContactsList;
    },

    editContact: (state, action: PayloadAction<IContact>) => {
      const editedContactsList = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return { ...contact, ...action.payload };
        }
        return contact;
      });
      state.contacts = editedContactsList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action: any) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action: any) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        const newContactsList = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
        state.contacts = newContactsList;
      })
      .addCase(deleteContact.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })

  },
});
