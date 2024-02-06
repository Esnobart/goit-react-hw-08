import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css';

export const ContactList = ({ users, onDelete }) => {
    return (
        <ul className={css.listContact}>
            {users.map(user => (
                <li key={user.id} className={css.liContact}><Contact user={user} onDelete={onDelete} /></li>
            ))}
        </ul>
    )
}