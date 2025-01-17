import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.searchBox}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.input}
        placeholder="Search by name..."
      />
    </label>
  );
};

export default SearchBox;
