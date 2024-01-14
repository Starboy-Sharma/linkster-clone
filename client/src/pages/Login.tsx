import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../hooks/useAuth';
import { useContext } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(authContext);

  const handleLogin = () => {
    login().then(() => {
      console.log('Login successful');
      navigate('/dashboard');
    });
  };

  return (
    <>
      <div>Login</div>
      <Button colorScheme="blue" onClick={handleLogin}>
        {' '}
        Login{' '}
      </Button>
    </>
  );
};

export default Login;
