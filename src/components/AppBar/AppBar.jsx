import { Header } from '../Header/Header';
import { UserHeader } from '../UserHeader/UserHeader';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../redux/hooks';
import css from './AppBar.module.css'

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.head}>
      <Header />
      {isLoggedIn ? <UserHeader /> : <AuthNav />}
    </header>
  );
};