import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input className={styles.input} type="text" onChange={handleChange} />
    </div>
    // <input type="text" onChange={handleChange} placeholder="Search contacts" />
  );
};

// const SearchBox = ({ value, onChange }) => (
//   <div className={styles.wrapper}>
//     <label className={styles.label} htmlFor="filter">
//       Find contacts by name
//     </label>
//     <input
//       className={styles.input}
//       type="text"
//       value={value}
//       onChange={onChange}
//     />
//   </div>
// );

export default SearchBox;
