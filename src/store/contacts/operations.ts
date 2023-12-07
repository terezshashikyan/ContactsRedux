import { AppDispatch } from "..";
import { contactsSlice } from "./contactsSlice";

const setContact = (id: number) => {
  const { setContact } = contactsSlice.actions;
  return (dispatch: AppDispatch) => {
    dispatch(setContact(id));
  };
};

export const contactsOp = {
  setContact,
};
