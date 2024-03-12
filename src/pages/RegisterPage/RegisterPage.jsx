import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { register } from "../../redux/operation";
import { useId } from "react";
import * as Yup from 'yup';
import css from './RegisterPage.module.css'

export default function RegisterPage() {
    const dispatch = useDispatch();
    const userName = useId();
    const userEmail = useId();
    const Password = useId();

    const validation = Yup.object().shape({
        email: Yup.string().matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm).min(3, 'Too short!').max(50, 'Too long!'),
        password: Yup.string().min(3, 'Too short!').max(30, 'Too long!')
    });

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validation}
            onSubmit={(values, actions) => { 
                const id = uuidv4();
                dispatch(register({id: id, ...values }));
                actions.resetForm();
            }}
        >
            <Form autoComplete='off' className={css.registform}>
                <label htmlFor={userName}>Username
                    <Field type="text" name="name" id={userName} />
                </label>
                <label htmlFor={userEmail}>Email
                    <Field type="email" name="email" id={userEmail} />
                </label>
                <label htmlFor={Password}>Password
                    <Field type="password" name="password" id={Password} />
                </label>
                <button type="submit" className={css.registbtn}>Register</button>
            </Form>
        </Formik>
    )
}