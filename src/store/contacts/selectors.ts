import { RootState } from "..";
import { createSelector } from "@reduxjs/toolkit";
import { IContactsInitialState } from "./types";

const contactsStoreSelector = (state: RootState) => state.contactsStore;

const contactsSelector = createSelector(
  [contactsStoreSelector],
  (contactsStore: IContactsInitialState) => contactsStore.contacts
);

const contactSelector = createSelector(
  [contactsStoreSelector],
  (contactsStore: IContactsInitialState) => contactsStore.contact
);

export const contactsSel = {
  contactsStoreSelector,
  contactsSelector,
  contactSelector,
};
