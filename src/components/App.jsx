import { useDispatch, useSelector } from "react-redux";
import css from "./App.module.css";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../redux/operations";
import { Filter } from "./Filter/Filter";
import { selectError, selectIsLoading } from "../redux/selectors";
import { Loader } from "./Loader/Loader";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <div className={css.phonebook}>
      {isLoading && !error && <Loader />}
      <h1>Phonebook</h1>
      {error && <ErrorMessage />}
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
