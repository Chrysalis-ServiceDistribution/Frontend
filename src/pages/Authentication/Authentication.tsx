import React, { useContext, useState } from 'react';
import { Box, Flex, TextField, Text, Button, Link } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function Authentication() {
  const { login, register } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const [signupMode, setSignupMode] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername((e.target as HTMLInputElement).value);
  };
  const handelEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
  };
  const handelPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword((e.target as HTMLInputElement).value);
  };
  const handleSignUp = () => {
    //TODO: pass username, email, and password to the auth context and handle the signup
    // console.log('Signing up:', username, email, password);
    register?({ username, email, password }):

    //On api okay, login, wait, if good and redirect to home, if not switch to login page, display error message
    //throwing this here so it is part of flow, logic required to implemnt correctly
    navigate('/');
    //On api error, display error message
  };

  const handleLogin = async () => {
    if (!login) { return }
    await login({ username, password });
    //On api okay, login, wait, if good and redirect to home

    //throwing this here so it is part of flow, logic required to implemnt correctly
    navigate('/');
    //On api error, display error message
  };
  return (
    <>
      <Flex direction="column" gap="5" justify="center" align="center">
        <Text size="9">Chrysalis</Text>
        {signupMode && (
          <Box>
            <TextField.Root onChange={(e)=>{handelUsernameChange(e)}} size="3" placeholder="Username" color="jade" />
          </Box>
        )}
        <Box>
          <TextField.Root onChange={(e)=>{handelEmailChange(e)}} size="3" placeholder="Email" />
        </Box>
        <Box>
          <TextField.Root onChange={(e)=>{handelPasswordChange(e)}} size="3" placeholder="Password" type="password" />
        </Box>
        {!signupMode && (
          <Button
            color='jade'
            onClick={() => {
              handleLogin();
            }}
          >
            Log-In
          </Button>
        )}
        {signupMode && (
          <Button
            color='jade'
            onClick={() => {
              handleSignUp();
            }}
          >
            Sign-Up
          </Button>
        )}
        <Flex direction="column-reverse">
          {!signupMode && (
            <Text size="1">
              New?{' '}
              <Link
                size="1"
                onClick={() => {
                  setSignupMode(!signupMode);
                }}
              >
                {' '}
                Sign-up
              </Link>{' '}
              Instead
            </Text>
          )}
          {signupMode && (
            <Text size="1">
              {' '}
              Already have an account?{' '}
              <Link
                size="1"
                onClick={() => {
                  setSignupMode(!signupMode);
                }}
              >
                {' '}
                Login
              </Link>
              !
            </Text>
          )}
        </Flex>
      </Flex>
    </>
  );
}
