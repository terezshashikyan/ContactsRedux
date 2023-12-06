import { FC } from "react";
import { useNavigate } from "react-router";
import { IContactListItem } from "./types";

import styles from "./ContactListItem.module.scss";
import { ProfileImage } from "..";
import { icon } from "../../assets/images";

const ContactListItem: FC<IContactListItem> = ({ contact }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        navigate(`/${contact.id}`);
      }}
    >
      <ProfileImage
        img={contact?.image || icon}
        size="small"
        alt={contact.name.charAt(0)}
      />
      <p className={styles.name}>{contact.name}</p>
    </div>
  );
};

export default ContactListItem;
