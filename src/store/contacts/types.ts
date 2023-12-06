import { IContact } from "../../types";

export interface IContactsInitialState {
  contacts: IContact[] | [];
  contact: null | IContact;
  loading: boolean;
  error: string | null;
}
