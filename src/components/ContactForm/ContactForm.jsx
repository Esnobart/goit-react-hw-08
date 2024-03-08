import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { v4 as uuidv4 } from 'uuid';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contactName = useId();
    const contactNumber = useId();
    const validation = Yup.object().shape({
        name: Yup.string().min(3, 'Too short!').max(30, 'Too long!').required('Required!'),
        number: Yup.string().matches(/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g).min(3, 'Too short!').max(30, 'Too long!').required('Required!')
    })

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validation}
            onSubmit={(values, actions) => { 
                const id = uuidv4();
                dispatch(addContact({ ...values, id: id }));
                actions.resetForm();
            }}>
            <Form autoComplete='off' className={css.form}>
                <label htmlFor={contactName}>Name
                    <Field type="text" name="name" id={contactName} />
                    <ErrorMessage name="name" component="span" className={css.error} />
                </label>
                <label htmlFor={contactNumber}>Number
                    <Field type="text" name="number" id={contactNumber} />
                    <ErrorMessage name="number" component="span" className={css.error} />
                </label>
                <button className={css.submit} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}