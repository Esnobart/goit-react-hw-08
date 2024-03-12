import { useDispatch } from "react-redux";
import { useEffect, lazy } from "react";
import { currentUser } from "../../redux/operation";
import { Routes, Route } from "react-router-dom";
import { RestrictedRoute } from "../Routes/RestrictedRoute";
import { PrivateRoute } from "../Routes/PrivateRoute";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../../redux/hooks";

const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));
    const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
    const LoginPage = lazy(() => import('../../pages/LogInPage/LoginPage'));
    const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

    useEffect(() => {
        dispatch(currentUser())
    }, [dispatch]);

    return isRefreshing ? (<b>Refreshing user...</b>) : (<>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
            <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
            <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
        </Routes>
        <Toaster />
    </> )}


export default App