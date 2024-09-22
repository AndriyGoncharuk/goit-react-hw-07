import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contact}>
      <div className={styles.contactText}>
        <span>
          <FaUser className={styles.contactIcon} />
          {name}
        </span>
        <span>
          <FaPhoneAlt className={styles.contactIcon} />
          {number}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={styles.btn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
