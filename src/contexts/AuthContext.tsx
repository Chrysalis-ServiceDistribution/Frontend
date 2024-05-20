import { createContext, useState } from 'react';
import { AuthContextType } from '../@types/authContext';
import { loginUser, registerUser } from '../services/apiServices'

export const AuthContext: React.Context<AuthContextType | null> =
  createContext<AuthContextType | null>(null);

export function AuthContextProvider(props: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  async function login(payload: { username: string; password: string }) {
    const { data, status } = await loginUser(payload)
    if (status !== 200) {
      return
    }
    console.log(data)
  }

  async function register(payload: {
    username: string;
    email: string;
    password: string;
  }) {
    const { data, status } = await registerUser(payload)
    if (status !== 200) {
      return
    }
    console.log(data)
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        isLoggedIn,

        login,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
