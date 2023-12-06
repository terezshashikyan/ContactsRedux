import { AppDispatch } from "..";
import { client } from "../../configs";
import { contactsSlice } from "./contactsSlice";

// const getContacts = () => {
//   const { setContacts } = contactsSlice.actions;
//   return async (dispatch: AppDispatch) => {
//     client.get(`users`).then((response) => {
//       dispatch(
//         setContacts(
//           response.data.map((contact: IContact) => {
//             return {
//               ...contact,
//               phone: [{ id: Date.now(), value: contact.phone }],
//               email: [{ id: Date.now(), value: contact.email }],
//             };
//           })
//         )
//       );
//     });
//   };
// };


const setContact = (id: number) => {
  const { setContact } = contactsSlice.actions;
  return (dispatch: AppDispatch) => {
    dispatch(setContact(id));
  };
};

const addContact = (
  name: string,
  lastName: string,
  company: string,
  phoneNumbers: { id: number; value: string }[] | [],
  emails: { id: number; value: string }[] | [],
  selectedImage: any
) => {
  const { addContact } = contactsSlice.actions;
  return async (dispatch: AppDispatch) => {
    client
      .post("users", {
        email: emails,
        id: Date.now(),
        name: `${name} ${lastName}`,
        image: selectedImage,
        phone: phoneNumbers,
        company: {
          name: company,
        },
      })
      .then(() => {
        dispatch(
          addContact({
            email: emails,
            id: Date.now(),
            name: `${name} ${lastName}`,
            image: selectedImage,
            phone: phoneNumbers,
            company: {
              name: company,
            },
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const deleteContact = (id: number) => {
  const { deleteContact } = contactsSlice.actions;
  return async (dispatch: AppDispatch) => {
    client.delete(`users/${id}`).catch((error) => {
      console.log(error);
    });
    dispatch(deleteContact(id));
  };
};

const editContact = (
  id: number,
  name: string,
  lastName: string,
  company: string,
  phoneNumbers: { id: number; value: string }[] | [],
  emails: { id: number; value: string }[] | [],
  selectedImage: any
) => {
  const { editContact } = contactsSlice.actions;
  return async (dispatch: AppDispatch) => {
    dispatch(
      editContact({
        id: id,
        name: `${name} ${lastName}`,
        email: emails,
        phone: phoneNumbers,
        image: selectedImage,
        company: {
          name: company,
        },
      })
    );
  };
};

export const contactsOp = {
  deleteContact,
  editContact,
  addContact,
  setContact,
};