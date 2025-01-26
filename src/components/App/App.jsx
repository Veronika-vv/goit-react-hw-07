import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Книга контактів</h1>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
