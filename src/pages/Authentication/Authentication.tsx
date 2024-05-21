import React, { useContext, useState } from 'react';
import { Box, Flex, TextField, Text, Button, Link } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function Authentication() {
  const { login, register } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const [signupMode, setSignupMode] = useState(false);

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const username: string = (e.target as HTMLButtonElement)
      .parentElement!.getElementsByClassName('Username')[0]
      .getElementsByTagName('input')[0].value;
    const email: string = (e.target as HTMLButtonElement)
      .parentElement!.getElementsByClassName('Email')[0]
      .getElementsByTagName('input')[0].value;
    const password: string = (e.target as HTMLButtonElement)
      .parentElement!.getElementsByClassName('Password')[0]
      .getElementsByTagName('input')[0].value;
    //TODO: pass username, email, and password to the auth context and handle the signup
    console.log('Signing up:', username, email, password);
    register?({ username, email, password }):

    //On api okay, login, wait, if good and redirect to home, if not switch to login page, display error message
    //throwing this here so it is part of flow, logic required to implemnt correctly
    navigate('/');
    //On api error, display error message
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!login) { return }
    const username: string = (e.target as HTMLButtonElement)
      .parentElement!.getElementsByClassName('Username')[0]
      .getElementsByTagName('input')[0].value;
    const password: string = (e.target as HTMLButtonElement)
      .parentElement!.getElementsByClassName('Password')[0]
      .getElementsByTagName('input')[0].value;
    // TODO: pass email and password to the auth context and handle the login
    console.log('Logging in:', username, password);
    await login({ username, password });
    //On api okay, login, wait, if good and redirect to home

    //throwing this here so it is part of flow, logic required to implemnt correctly
    navigate('/');
    //On api error, display error message
  };
  return (
    <>
      <Flex direction="column" gap="3" justify="center" align="center">
        <Text> Welcome to Chrysalis</Text>
        <Box maxWidth="200px" className="Username">
          <TextField.Root size="3" placeholder="Username" />
        </Box>
        {signupMode && (
          <Box maxWidth="200px" className="Email">
            <TextField.Root size="3" placeholder="Email" />
          </Box>
        )}
        <Box maxWidth="200px" className="Password">
          <TextField.Root size="3" placeholder="Password" type="password" />
        </Box>
        {!signupMode && (
          <Button
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            Log-In
          </Button>
        )}
        {signupMode && (
          <Button
            onClick={(e) => {
              handleSignUp(e);
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
