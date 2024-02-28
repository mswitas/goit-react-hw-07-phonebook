import { Contact } from "components/Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";


export const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    return (
        <ul>
            {contacts.map(contact => {
                return (
                    <Contact key={contact.id} contact={contact} />
                );
            })}
        </ul>
    );
};

