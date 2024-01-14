import {
  Container,
  Heading,
  Icon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../hooks/useAuth';
import { useContext, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => setEmail(e.target.value);

  const isError = email === '';

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
      <div className="wrapper">
        <div className="box cover-img"></div>
        <div className="box">
          <Container>
            <Heading pt="2rem" as="h1" size="lg">
              {' '}
              <Icon
                as={FaUser}
                p={'5px'}
                className="user-icon"
                color={'white'}
                w="25px"
                h="25px"
              />{' '}
              Welcome back{' '}
            </Heading>

            <FormControl isInvalid={isError}>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={handleInputChange} />
              {!isError ? (
                <FormHelperText>
                  Enter the email.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Login;
