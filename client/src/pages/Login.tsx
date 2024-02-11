import {
  Container,
  Heading,
  Icon,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../hooks/useAuth';
import { useContext, useEffect, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  const navigate = useNavigate();
  const { login } = useContext(authContext);

  const handleLogin = (e: React.FormEvent) => {

    e.preventDefault();

    login().then(() => {
      console.log('Login successful');
      navigate('/dashboard');
    });
  };

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }
    setIsFormValid(valid && !passwordError);
  }, [email, passwordError]);

  useEffect(() => {

    let valid = true;

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }
    setIsFormValid(!emailError && valid);
  }, [password, emailError]);

  useEffect(() => {
    setEmailError('')
    setPasswordError('')
  },  []);

  return (
    <div className="wrapper">
      <div className="box cover-img"></div>
      <div className="box">
        <Container>
          <Heading pt="4rem" as="h1" size="lg" mb='1rem' display='flex' alignItems='center' gap='10px'>
            {' '}
            <Icon
              as={FaUser}
              p={'5px'}
              className="user-icon"
              color={'white'}
              w="28px"
              h="28px"
              borderRadius='5px'
            />{' '}
            Welcome back{' '}
          </Heading>
          <form onSubmit={handleLogin}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus={true}
              />
              {emailError === '' ? (
                <FormHelperText>Enter the email.</FormHelperText>
              ) : (
                <p style={{ color: 'red' }}>{emailError}</p>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError === '' ? (
                <FormHelperText>Enter the password.</FormHelperText>
              ) : (
                <p style={{ color: 'red' }}>{passwordError}</p>
              )}
            </FormControl>

            <FormControl>
              <Button type='submit' isDisabled={!isFormValid} colorScheme='teal' color='white' width='100%' mt='1rem'> Login </Button>
            </FormControl>

            <p> Form is {isFormValid.toString()} </p>

          </form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
