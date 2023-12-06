import { IContactsProp } from "./types";
import { sortContacts } from "../../helpers";
import ContactListItem from "../ContactListItem";

import styles from "./ContactsList.module.scss";

const ContactsList: React.FC<IContactsProp> = ({ contacts }) => {
  const contactsRenderer = sortContacts(contacts).map((contact, i, arr) => {
    if (!arr[i - 1]) {
      return (
        <>
          <p className={styles.alphGroupName}>{contact.name.charAt(0)}</p>
          <ContactListItem contact={contact} />
        </>
      );
    } else if (arr[i - 1].name.charAt(0) !== contact.name.charAt(0)) {
      return (
        <>
          <p className={styles.alphGroupName}>{contact.name.charAt(0)}</p>
          <ContactListItem contact={contact} />
        </>
      );
    } else {
      return <ContactListItem contact={contact} />;
    }
  });

  return <section className={styles.wrapper}>{contactsRenderer}</section>;
};

export default ContactsList;
