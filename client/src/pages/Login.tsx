import { Button, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../hooks/useAuth';
import { useContext, useEffect, useState } from 'react';

const Login = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(authContext);

  const tealClicked = () => {
    console.log('You clicked on the teal button');
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  };

  useEffect(() => {
    console.log('This is a long message', count);

    const button = document.querySelector('#teal-btn');

    button?.addEventListener('click', tealClicked);

    const sampleTimeout = setTimeout(() => {
      console.log('Your click count is', count);
    }, 3000); // 3 seconds

    return () => {
      button?.removeEventListener('click', tealClicked);
      clearTimeout(sampleTimeout);
    };
  }, [count]);

  useEffect(() => {
    console.log('Welcome to Interval world');

    let timerInterval: number;

    if (isRunning) {
      timerInterval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning]);

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

      <Box
        maxW="sm"
        borderWidth="1px"
        borderEndRadius="lg"
        overflow="hidden"
        marginInline="auto"
      >
        <Box p="6">
          <Box display="flex" alignItems="baseline" justifyContent="center">
            <Button
              colorScheme="orange"
              textColor="whitesmoke"
              marginRight="10px"
              onClick={() => setCount((count) => count + 1)}
            >
              {' '}
              Increment{' '}
            </Button>
            <span> {count} </span>
            <Button
              colorScheme="purple"
              textColor="whitesmoke"
              marginInline="10px"
              onClick={() => setCount((count) => count - 1)}
            >
              {' '}
              Decrement{' '}
            </Button>

            <Button colorScheme="teal" id="teal-btn">
              {' '}
              Custom Event{' '}
            </Button>
          </Box>

          <Box m="5" p="6">
            <Button
              colorScheme={isRunning ? 'red' : 'teal'}
              onClick={() => setIsRunning((isRunning) => !isRunning)}
            >
              {' '}
              {isRunning ? 'Stop' : 'Start'}{' '}
            </Button>
            Timer: {formatTime(timer)}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
