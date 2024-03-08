import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css';

export const ContactList = () => {
    const { items, loading } = useSelector(state => state.contacts)
    const searchValue = useSelector(state => state.filters.name)

    const visible = items.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (
        <div>
            {loading && <p>Loading...</p>}
            <ul className={css.listContact}>
                {visible.map(user => (
                    <li key={user.id} className={css.liContact}><Contact user={user} /></li>
                ))}
            </ul>
        </div>
    )
}