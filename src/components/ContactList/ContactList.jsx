import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => handleDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
