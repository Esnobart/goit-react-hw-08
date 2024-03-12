import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/operation';

export const UserHeader = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};