import { useContext } from 'react';
import { authContext } from '../hooks/useAuth';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { authed } = useContext(authContext);
  const navigate = useNavigate();

  const signup = () => {
    navigate('/signup');
  };

  return (
    <>
      <div>Dashboard {authed.toString()}</div>
      <Button colorScheme="orange" onClick={signup}>
        {' '}
        Signup redirection{' '}
      </Button>
    </>
  );
};

export default Dashboard;
