import { IContact } from "../../types";
import { AppDispatch } from "../../store";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOp, contactsSel } from "../../store/contacts";
import { Input, Button, Heading, ContactsList } from "../../components";

import styles from "./Home.module.scss";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchInput, setSearchInput] = useState("");
  const contacts = useSelector(contactsSel.contactsSelector);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/add");
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.firstSection}>
        <Heading children="Contacts" />
        <Button
          type="button"
          onClick={handleNavigation}
          children="+"
          className={styles.button}
          disabled={false}
        />
      </div>
      <Input
        type="search"
        placeholder="Search ..."
        value={searchInput}
        onChange={handleSearchInputChange}
        label="search"
      />
      <ContactsList
        contacts={contacts.filter((contact: IContact) =>
          contact.name.toLowerCase().includes(searchInput.toLowerCase())
        )}
      />
    </section>
  );
};

export default Home;
