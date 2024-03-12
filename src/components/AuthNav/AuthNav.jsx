import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'

export const AuthNav = () => {
  return (
    <div className={css.authcontainer}>
      <NavLink to="/register" className={css.links}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.links}>
        Log In
      </NavLink>
    </div>
  );
};