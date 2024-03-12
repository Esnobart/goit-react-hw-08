import { NavLink } from 'react-router-dom';
import { useAuth } from '../../redux/hooks';
import css from './Header.module.css'

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navi}>
      <NavLink to="/" className={css.links}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.links}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};