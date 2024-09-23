import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.filter);

  const selectNameFilter = (event) => {
    const value = event.target.value.trim();
    dispatch(changeFilter(value));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={styles.input}
        type="text"
        value={filterValue}
        onChange={selectNameFilter}
      />
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
