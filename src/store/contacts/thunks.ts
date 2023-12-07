import { client } from "../../configs";
import { IContact } from "../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddContactThunkProps, IEditContactThunkProps } from "./types";

export const getContacts = createAsyncThunk("contacts", async () => {
  const data = client
    .get(`users`)
    .then((response) =>
      response.data.map((contact: IContact) => {
        return {
          ...contact,
          id: Number(contact.id),
          phone: [{ id: Date.now(), value: contact.phone }],
          email: [{ id: Date.now(), value: contact.email }],
        };
      })
    )
    .catch((error) => {
      console.log(error);
    });
  return data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact: IAddContactThunkProps, thunkAPI) => {
    try {
      const response = await client.post("users", {
        email: contact.emails,
        id: Date.now(),
        name: `${contact.firstName} ${contact.lastName}`,
        image: contact.selectedImage,
        phone: contact.phoneNumbers,
        company: {
          name: contact.company,
        },
      });
      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (contact: IEditContactThunkProps, thunkAPI) => {
    try {
      await client.put(`users/${contact.id}`, {
        id: contact.id,
        email: contact.emails,
        name: `${contact.firstName} ${contact.lastName}`,
        image: contact.selectedImage,
        phone: contact.phoneNumbers,
        company: {
          name: contact.company,
        },
      });
      return {
        id: contact.id,
        email: contact.emails,
        name: `${contact.firstName} ${contact.lastName}`,
        image: contact.selectedImage,
        phone: contact.phoneNumbers,
        company: {
          name: contact.company,
        },
      };
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (id: number, thunkAPI) => {
    try {
      client.delete(`users/${id}`);
      return id;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
