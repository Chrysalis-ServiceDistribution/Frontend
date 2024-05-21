import { createContext, useState } from 'react';
import { AuthContextType } from '../@types/authContext';
import { loginUser, registerUser } from '../services/apiServices';
import { setToken } from '../services/tokenService';

export const AuthContext = createContext<AuthContextType>({
  username: '',
  loggedInUserID: null,
  isLoggedIn: false,
});

export function AuthContextProvider(props: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);
  const [loggedInUserID, setLoggedInUserID] = useState<number | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  async function login(payload: { username: string; password: string }) {
    const data = await loginUser(payload);
    setToken(data.access);
    setUsername(data.user.username);
    setLoggedInUserID(data.user.id);
    setIsLoggedIn(true);
    console.log(data);
  }

  async function register(payload: {
    username: string;
    email: string;
    password: string;
  }) {
    const { data, status } = await registerUser(payload);
    if (status !== 200) {
      return;
    }
    console.log(data);
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        loggedInUserID,
        isLoggedIn,

        login,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
