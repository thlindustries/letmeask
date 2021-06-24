import {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { toast } from 'react-toastify';
import { firebase, auth } from 'services/firebase';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps): any => {
  const [user, setUser] = useState<User>(() => {
    const isUserSignedIn = localStorage.getItem('@LetMeAsk:user');

    if (isUserSignedIn) {
      return JSON.parse(isUserSignedIn);
    }

    return {} as User;
  });

  const signInWithGoogle = useCallback(async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      const theUser = {
        id: uid,
        name: displayName,
        avatar: photoURL,
      };

      localStorage.setItem('@LetMeAsk:user', JSON.stringify(theUser));

      setUser({ ...theUser });
    } else {
      // eslint-disable-next-line no-alert
      toast.error('Authentication failed');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@LetMeAsk:user');

    setUser({} as User);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((gUser) => {
      if (gUser) {
        const { displayName, photoURL, uid } = gUser;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      } else {
        signOut();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [signOut]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
