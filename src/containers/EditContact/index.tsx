import { icon } from "../../assets/images";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteContact } from "../../store/contacts/thunks";
import { contactsOp, contactsSel } from "../../store/contacts";
import { Input, Button, Heading, ProfileImageUploader } from "../../components";

import styles from "./EditContact.module.scss";
import { AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const EditContact = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const contact = useSelector(contactsSel.contactSelector);

  useEffect(() => {
    dispatch(contactsOp.setContact(Number(id)));
  }, []);

  const editContact = () => {
    dispatch(
      contactsOp.editContact(
        Number(id),
        firstName,
        lastName,
        company,
        phoneNumbers,
        emails,
        selectedImage
      )
    );
  };

  const delContact = () => {
    dispatch(deleteContact(Number(id)));
  };

  const [company, setCompany] = useState(
    contact?.company?.name ? contact.company.name : ""
  );
  const [phoneNumbers, setPhoneNumbers] = useState<
    { id: number; value: string }[] | []
  >(contact?.phone ? contact.phone : []);
  const [lastName, setLastName] = useState(
    contact?.name ? contact.name.split(" ")[1] : ""
  );
  const [firstName, setFirstName] = useState(
    contact?.name ? contact.name.split(" ")[0] : ""
  );
  const [emails, setEmails] = useState<{ id: number; value: string }[] | []>(
    contact?.email ? contact.email : []
  );
  const [selectedImage, setSelectedImage] = useState<
    File | Blob | MediaSource | string
  >(contact?.image ? contact.image : icon);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files?.length !== 0) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const handleEmailChange = (id: number, value: string) => {
    const updatedEmails = emails.map((email) =>
      email.id === id ? { ...email, value } : email
    );
    setEmails(updatedEmails);
  };

  const addEmailInput = () => {
    const newEmails = [...emails, { id: Date.now(), value: "" }];
    setEmails(newEmails);
  };

  const deleteEmailInput = (id: number) => {
    const newEmails = emails.filter((email) => email.id !== id);
    setEmails(newEmails);
  };

  const handlePhoneNumberChange = (id: number, value: string) => {
    const updatedPhoneNumbers = phoneNumbers.map((phoneNumber) =>
      phoneNumber.id === id ? { ...phoneNumber, value } : phoneNumber
    );
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const addPhoneNumberInput = () => {
    const newPhoneNumbers = [...phoneNumbers, { id: Date.now(), value: "" }];
    setPhoneNumbers(newPhoneNumbers);
  };

  const deletePhoneNumberInput = (id: number) => {
    const newPhoneNumbers = phoneNumbers.filter(
      (phoneNumber) => phoneNumber.id !== id
    );
    setPhoneNumbers(newPhoneNumbers);
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/${id}`);
  };

  return (
    <section className={styles.wrapper}>
      <Heading children="Edit Contact" />

      <div className={styles.wrapper__firstSection}>
        <Button
          type="button"
          onClick={handleNavigation}
          children="Cancel"
          className={styles.button}
          disabled={false}
        />

        <Button
          type="button"
          onClick={() => {
            editContact();
            handleNavigation();
          }}
          children="Done"
          className={styles.button}
          disabled={false}
        />
      </div>

      <ProfileImageUploader
        img={selectedImage}
        handleImageChange={handleImageChange}
      />
      <div className={styles.wrapper__inputs}>
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          label="first name"
        />

        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
          label="last name"
        />

        <Input
          type="text"
          placeholder="Company"
          value={company}
          onChange={handleCompanyChange}
          label="company"
        />
      </div>

      <div className={styles.wrapper__phoneNumbers}>
        {phoneNumbers.map((phoneNumber) => (
          <div className={styles.wrapper__phoneNumbers__inputHolder}>
            <Input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber.value}
              onChange={(e) =>
                handlePhoneNumberChange(phoneNumber.id, e.target.value)
              }
              label="phone number"
            />
            <Button
              type="button"
              onClick={() => deletePhoneNumberInput(phoneNumber.id)}
              children="x"
              className={styles.button}
              disabled={false}
            />
          </div>
        ))}
        <Button
          type="button"
          onClick={addPhoneNumberInput}
          children="+ Add Phone Number"
          className={styles.button}
          disabled={false}
        />
      </div>

      <div className={styles.wrapper__emails}>
        {emails.map((email) => (
          <div className={styles.wrapper__emails__inputHolder}>
            <Input
              type="text"
              placeholder="Email"
              value={email.value}
              onChange={(e) => handleEmailChange(email.id, e.target.value)}
              label="email"
            />
            <Button
              type="button"
              onClick={() => deleteEmailInput(email.id)}
              children="x"
              className={styles.button}
              disabled={false}
            />
          </div>
        ))}
        <Button
          type="button"
          onClick={addEmailInput}
          children="+ Add Email Address"
          className={styles.button}
          disabled={false}
        />
      </div>
      <Button
        type="button"
        onClick={() => {
          delContact();
          navigate("/");
        }}
        children="Delete Contact"
        className={styles.button}
        disabled={false}
      />
    </section>
  );
};

export default EditContact;
