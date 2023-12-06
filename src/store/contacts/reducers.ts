import { client } from "../../configs";
import { IContact } from "../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface User {
    id: string
    first_name: string
    last_name: string
    email: string
  }

export const getContacts = createAsyncThunk("contacts", async () => {
  const data = client
    .get(`users`)
    .then((response) =>
      response.data.map((contact: IContact) => {
        return {
          ...contact,
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

export const addContact = createAsyncThunk("contacts/addContact", async (
    name: string,
    // company: string,
    // lastName: string,
    // phoneNumbers: { id: number; value: string }[] | [],
    // emails: { id: number; value: string }[] | [],
    // selectedImage: any
  ) => {
    try {
      const response = await client.post('users', {
        email: emails,
        id: Date.now(),
        name: `${name} ${lastName}`,
        image: selectedImage,
        phone: phoneNumbers,
        company: {
          name: company,
        },
      });
  
      // Handle the successful completion of the API call
      console.log('Contact added successfully:', response.data);
  
      // You can return the response data if needed
      return response.data;
    } catch (error) {
      // Handle errors
      console.error('Error adding contact:', error);
  
      // Rethrow the error or handle it as needed
      throw error;
    }
  };
  