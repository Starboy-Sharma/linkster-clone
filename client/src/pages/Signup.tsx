import { authContext } from '../hooks/useAuth';
import { useContext } from 'react';

const Signup = () => {
  const { authed } = useContext(authContext);

  return <div>Signup {authed.toString()}</div>;
};

export default Signup;