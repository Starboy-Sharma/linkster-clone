import { authContext } from '../hooks/useAuth';
import { useContext } from 'react';

export const Signup = () => {
  const { authed } = useContext(authContext);

  return <div>Signup {authed.toString()}</div>;
};
