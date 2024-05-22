export type AuthContextType = {
  username: string | null;
  loggedInUserID: number | null;
  isLoggedIn: boolean;

  login?: (payload: { username: string; password: string }) => Promise<void>;
  register?: (payload: {
    username: string;
    email: string;
    password: string;
  }) => Promise<void>;
};
