import { useDispatch, useSelector } from "react-redux"
import { selectContact, selectModalOpen } from "../../redux/selectors"
import { closeModal } from "../../redux/contactSlice"
import Modal from "react-modal"
import { deleteContact } from "../../redux/operation"

Modal.setAppElement('#root');

export const ContactModal = () => {
    const modalState = useSelector(selectModalOpen);
    const contact = useSelector(selectContact);
    const dispatch = useDispatch();
    console.log(contact)

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
        dispatch(closeModal())
    }

    return (
        <Modal isOpen={modalState} onRequestClose={() => dispatch(closeModal())}>
            <h1>Do you sure you want delete {contact.name}?</h1>
            <div>
                <button onClick={() => handleDelete()}>Yes</button>
                <button onClick={() => dispatch(closeModal())}>No</button>
            </div>
        </Modal>
    )
}