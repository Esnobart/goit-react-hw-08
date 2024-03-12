import { NavLink } from 'react-router-dom';
import { useAuth } from '../../redux/hooks';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};