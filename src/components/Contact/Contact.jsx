import contact from '../svg/contact.svg'
import phone from '../svg/phone.svg'
import css from './Contact.module.css'

export const Contact = ({ user, onDelete }) => {
    return (
        <div key={user.id} className={css.contactBox}>
            <div>
                <div className={css.textDiv}><img src={contact} width="16" height="16" /><p className={css.text}>{user.name}</p></div>
                <div className={css.textDiv}><img src={phone} width="16" height="16" /><p className={css.text}>{user.number}</p></div>
            </div>
            <button type="button" onClick={() => onDelete(user.id)} className={css.button}>Delete</button>
        </div>


    )
}