import { IContact } from "../../types";

export interface IContactsInitialState {
  contacts: IContact[] | [];
  contact: null | IContact;
  loading: boolean;
  error: string | null;
}

export interface IAddContactThunkProps {
  firstName: string;
  lastName: string;
  company: string;
  phoneNumbers: { id: number; value: string }[] | [];
  emails: { id: number; value: string }[] | [];
  selectedImage: any;
}

export interface IEditContactThunkProps {
  id: number | string;
  firstName: string;
  lastName: string;
  company: string;
  phoneNumbers: { id: number; value: string }[] | [];
  emails: { id: number; value: string }[] | [];
  selectedImage: any;
}
