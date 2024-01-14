import { ReactNode, createContext, useState } from 'react';

interface Props {
  children: ReactNode
}

interface AuthContext {
  authed: boolean;
  login: () => Promise<boolean>;
  logout: () => Promise<boolean>;
}

export const authContext = createContext<AuthContext>({
  authed: false,
  login: () => Promise.resolve(false),
  logout: () => Promise.resolve(false)
});

function useAuth(): AuthContext {
  const [authed, setAuthed] = useState(false);

  return {
    authed,
    login() {
      return new Promise((res) => {
        alert('user wants to login')
        setAuthed(true);
        res(true);
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res(false);
      });
    },
  };
}

// create a auth provider
export function AuthProvider({ children }: Readonly<Props>) {
  const auth = useAuth();

  return <authContext.Provider value={auth}> {children} </authContext.Provider>;
}


// Reference: https://ui.dev/react-router-protected-routes-authentication