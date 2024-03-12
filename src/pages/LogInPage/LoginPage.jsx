import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operation";
import { useId } from "react";
import toast from "react-hot-toast";
import * as Yup from 'yup';
import css from './LoginPage.module.css'

export default function LoginPage() {
    const dispatch = useDispatch();
    const userEmail = useId();
    const Password = useId();

    const validation = Yup.object().shape({
        email: Yup.string().matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm).min(3, 'Too short!').max(50, 'Too long!'),
        password: Yup.string().min(3, 'Too short!').max(30, 'Too long!')
    });

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validation}
            onSubmit={(values, actions) => { 
                dispatch(logIn({ ...values }))
                    .unwrap()
                    .then(() => {})
                    .catch(() => {
                        toast.error('Email or password is incorrect, try again')
                    })
                actions.resetForm();
            }}
        >
            <Form autoComplete='off' className={css.loginform}>
                <label htmlFor={userEmail}>Email
                    <Field type="email" name="email" id={userEmail} />
                </label>
                <label htmlFor={Password}>Password
                    <Field type="password" name="password" id={Password} />
                </label>
                <button className={css.loginbtn} type="submit">Log In</button>
            </Form>
        </Formik>
    )
}