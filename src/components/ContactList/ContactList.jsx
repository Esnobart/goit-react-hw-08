import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css';
import { selectLoading, selectVisibleContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";

export const ContactList = () => {
    const loading = useSelector(selectLoading)
    const visible = useSelector(selectVisibleContacts)
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