import { Header } from '../Header/Header';
import { UserHeader } from '../UserHeader/UserHeader';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../redux/hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Header />
      {isLoggedIn ? <UserHeader /> : <AuthNav />}
    </header>
  );
};