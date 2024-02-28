import { addContact } from "../../redux/operations";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

export const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const phone = form.elements.number.value;
        dispatch(addContact({ name, phone }));
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.inputWrapper}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    pattern="[a-zA-Z \-']{2,30}"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </div>
            <div className={css.inputWrapper}>
                <label htmlFor="number">Number</label>
                <input
                    type="tel"
                    id="number"
                    name="number"
                    pattern="^\+?[0-9 \-\(\)]{7,20}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </div>
            <button type="submit">Add contact</button>
        </form>
    );
}
