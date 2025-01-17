import { nanoid } from "nanoid";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
