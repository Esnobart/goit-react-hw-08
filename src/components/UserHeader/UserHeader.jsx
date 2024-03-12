import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/operation';
import { useAuth } from '../../redux/hooks';
import css from './USerHeader.module.css'

export const UserHeader = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.navContainer}>
      <p className={css.welcomeText}>Welcome back, {user.name}</p>
      <button type="button" className={css.logoutbtn} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};