import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../../redux/contactOps";
import styles from "./Contact.module.css";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(id));
  };

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
      <button onClick={handleDelete} className={styles.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
