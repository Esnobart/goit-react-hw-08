import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css';

export const ContactList = () => {
    const users = useSelector(state => state.contacts.items)
    const searchValue = useSelector(state => state.filters.name)

    const visible = users.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (
        <ul className={css.listContact}>
            {visible.map(user => (
                <li key={user.id} className={css.liContact}><Contact user={user} /></li>
            ))}
        </ul>
    )
}