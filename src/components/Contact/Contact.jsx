import css from "./Contact.module.css";
import { HiPhone, HiUser } from "react-icons/hi";

const Contact = ({ name, number, onDelete }) => (
  <li className={css.contact}>
    <div className={css.container}>
      <span className={css.iconText}>
        <HiUser className={css.userIcon} size="24" />
        {name}
      </span>
      <span className={css.iconText}>
        <HiPhone className={css.phoneIcon} size="24" />
        {number}
      </span>
    </div>
    <button className={css.button} onClick={onDelete}>
      Delete
    </button>
  </li>
);

export default Contact;
