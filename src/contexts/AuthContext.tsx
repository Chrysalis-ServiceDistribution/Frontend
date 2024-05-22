import { createContext, useEffect, useState } from 'react';
import { AuthContextType } from '../@types/authContext';
import { loginUser, registerUser, verifyUser } from '../services/apiServices';
import { getToken, setToken } from '../services/tokenService';

export const AuthContext = createContext<AuthContextType>({
  storedToken: null,
  username: '',
  loggedInUserID: null,
  isLoggedIn: false,
  loaded: false,
});

export function AuthContextProvider(props: { children: React.ReactNode }) {
  const [storedToken, setStoredToken] = useState(() => {
    return getToken();
  });
  const [username, setUsername] = useState<string | null>(null);
  const [loggedInUserID, setLoggedInUserID] = useState<number | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const runner = async () => {
      const token = getToken();
      if (token === null) { return }
      const data = await verifyUser();
      setToken(data.access);
      setStoredToken(data.access);
      setUsername(data.user.username);
      setLoggedInUserID(data.user.id);
      setIsLoggedIn(true);
    }
    setLoaded(true);
    runner()
  }, [])

  async function login(payload: { username: string; password: string }) {
    const data = await loginUser(payload);
    setToken(data.access);
    setStoredToken(data.access);
    setUsername(data.user.username);
    setLoggedInUserID(data.user.id);
    setIsLoggedIn(true);
  }

  async function register(payload: {
    username: string;
    email: string;
    password: string;
  }) {
    const data = await registerUser(payload);
    setToken(data.access);
    setStoredToken(data.access);
    setUsername(data.user.username);
    setLoggedInUserID(data.user.id);
    setIsLoggedIn(true);
  }

  return (
    <AuthContext.Provider
      value={{
        storedToken,
        username,
        loggedInUserID,
        isLoggedIn,
        loaded,

        login,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
