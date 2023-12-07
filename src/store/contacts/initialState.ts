import { IContactsInitialState } from "./types";

const initialState: IContactsInitialState = {
  contacts: [],
  contact: null,
  loading: false,
  error: null,
};

export default initialState;
