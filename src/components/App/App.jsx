import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import styles from "./App.module.css";
import { FaAddressBook } from "react-icons/fa";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formbox}>
        <h1 className={styles.header}>
          Phonebook <FaAddressBook />
        </h1>
        <ContactForm />
        <SearchBox />
      </div>
      <div className={styles.list}>
        <ContactList />
      </div>
    </div>
  );
};

export default App;
