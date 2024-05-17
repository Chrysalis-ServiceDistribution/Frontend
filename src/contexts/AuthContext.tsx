import { createContext } from 'react';
import { AuthContextType } from '../@types/authContext';

export const AuthContext: React.Context<AuthContextType | null> =
  createContext<AuthContextType | null>(null);
export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
