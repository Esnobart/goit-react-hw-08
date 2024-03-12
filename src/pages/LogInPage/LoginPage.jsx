import { Formik, Form, Field, ErrorMessage } from "formik"
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operation";
import { useId } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
    const dispatch = useDispatch();
    const userEmail = useId();
    const Password = useId();
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, actions) => { 
                dispatch(logIn({ ...values }))
                    .unwrap()
                    .then(() => {
                        toast(`Welcome back, ${values.email}`)
                    })
                    .catch(() => {
                        toast.error('Email or password is incorrect, try again')
                    })
                actions.resetForm();
            }}
        >
            <Form autoComplete='off'>
                <label htmlFor={userEmail}>Email
                    <Field type="text" name="email" id={userEmail} />
                    <ErrorMessage name="email" component="span" />
                </label>
                <label htmlFor={Password}>Password
                    <Field type="text" name="password" id={Password} />
                    <ErrorMessage name="password" component="span" />
                </label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    )
}