import { Formik, Form, Field, ErrorMessage } from "formik"
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { register } from "../../redux/operation";
import { useId } from "react";

export default function RegisterPage() {
    const dispatch = useDispatch();
    const userName = useId();
    const userEmail = useId();
    const Password = useId();
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={(values, actions) => { 
                const id = uuidv4();
                dispatch(register({id: id, ...values }));
                actions.resetForm();
            }}
        >
            <Form autoComplete='off'>
                <label htmlFor={userName}>Username
                    <Field type="text" name="name" id={userName} />
                    <ErrorMessage name="name" component="span" />
                </label>
                <label htmlFor={userEmail}>Email
                    <Field type="text" name="email" id={userEmail} />
                    <ErrorMessage name="email" component="span" />
                </label>
                <label htmlFor={Password}>Password
                    <Field type="text" name="password" id={Password} />
                    <ErrorMessage name="password" component="span" />
                </label>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
}