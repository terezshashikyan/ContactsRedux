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

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact: IContact, thunkAPI) => {
//     try {
//       const response = await client.post('your-api-endpoint', {
//         email: contact.emails,
//         id: Date.now(),
//         name: `${contact.name} ${contact.lastName}`,
//         image: contact.selectedImage,
//         phone: contact.phoneNumbers,
//         company: {
//           name: contact.company,
//         },
//       });

//       // You can return data from the API response if needed
//       return response.data;
//     } catch (error: any) {
//       // You can handle errors here
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
  
export const deleteContact = createAsyncThunk('contacts/delete', 
async(id: string | number)=>{
  client.delete(`users/${id}`).catch((error) => {
    console.log(error);
  });
});