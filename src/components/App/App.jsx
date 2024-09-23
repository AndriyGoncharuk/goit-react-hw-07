import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import styles from "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectContacts, selectVisibleContacts } from "../../redux/selectors";
import Loader from "../Loader/Loader";
import { FaAddressBook } from "react-icons/fa";

function App() {
  const contacts = useSelector(selectVisibleContacts);
  const { loading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.formbox}>
        <h1 className={styles.header}>
          Phonebook <FaAddressBook />
        </h1>
        <ContactForm />
        <SearchBox />
        {loading && <Loader />}
        {error && <p>Cant load contacts at the moment</p>}
      </div>
      <div className={styles.list}>
        {!loading && !error && <ContactList contacts={contacts} />}
      </div>
    </div>
  );
}

export default App;
