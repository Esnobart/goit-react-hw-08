import { useState, useEffect } from "react"
import { ContactForm } from "../ContactForm/ContactForm"
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";

const App = () => {
    const [contacts, setContacts] = useState(() => {
        const storedContacts = localStorage.getItem('contacts');
        return storedContacts ? JSON.parse(storedContacts) : [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
    });
    const [contactFilter, setContactFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const visible = contacts.filter(contact => contact.name.toLowerCase().includes(contactFilter.toLowerCase()));

    const addContact = contact => {
        setContacts(prev => {
            return [...prev, { id: Date.now(), name: contact.name, number: contact.number },];
        })
    }

    const deleteContact = contactId => {
        setContacts((prev) => {
            return prev.filter(cont => cont.id !== contactId)
        })
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox searchValue={contactFilter} onSearchChange={setContactFilter} />
            <ContactList users={visible} onDelete={deleteContact} />
        </div>
    )
}

export default App;