import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul className={css.ul}>
          {visibleContacts.map((contact) => (
            <Contact key={contact.id} {...contact} />
          ))}
        </ul>
      ) : (
        <p>Your phonebook is empty!</p>
      )}
    </>
  );
}

export default ContactList;
