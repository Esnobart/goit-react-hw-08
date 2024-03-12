import { ContactForm } from "../ContactForm/ContactForm"
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/operation";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operation";

export default function Contacts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <div>
            <h1>Phonebook</h1><button type="button" onClick={() => dispatch(logOut())}></button>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    )
}