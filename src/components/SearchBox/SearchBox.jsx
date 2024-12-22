import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onChange }) => (
  <label className={css.searchBox}>
    Find contacts by name
    <input
      type="text"
      value={filter}
      onChange={(e) => onChange(e.target.value)}
      className={css.input}
    />
  </label>
);

export default SearchBox;
