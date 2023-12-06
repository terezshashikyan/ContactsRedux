import { useEffect } from "react";
import { Outlet } from "react-router";
import { AppDispatch } from "../../store";
import styles from "./Layout.module.scss";
import { useDispatch } from "react-redux";
import { contactsOp } from "../../store/contacts";
import { getContacts } from "../../store/contacts/reducers";

function Layout() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__contacts}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
