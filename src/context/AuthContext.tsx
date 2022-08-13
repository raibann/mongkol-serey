import useRequest from '@ahooksjs/use-request';
import AUTH_API from 'api/auth';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { persistState, getPersistedState } from 'utils/persist-util';

export interface IAuthState {
  authed: boolean;
}

interface IAuthContext {
  authState: any;
  setAuthState: React.Dispatch<any>;
}

export const AuthContext = createContext<IAuthContext>({
  authState: {},
  setAuthState: () => {},
});

interface IAuthWrapper {
  children: React.ReactNode;
}

export function AuthWrapper({ children }: IAuthWrapper) {
  const initMount = useRef(true);
  const [authState, setAuthState] = useState(
    getPersistedState(process.env.REACT_APP_PERSIST_AUTH) || {}
  );

  useEffect(() => {
    const vers = getPersistedState('version');
    if (vers && vers !== process.env.REACT_APP_PERSIST_VER) {
      // const auth = getPersistedState(process.env.REACT_APP_PERSIST_AUTH);
      // if (auth) {
      //   setAuthState(auth);
      // }
      localStorage.clear();
      persistState('version', process.env.REACT_APP_PERSIST_AUTH || '');
    }
  }, []);

  useEffect(() => {
    if (!initMount.current) {
      persistState(process.env.REACT_APP_PERSIST_AUTH || '', authState);
    } else initMount.current = false;
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const { authState, setAuthState } = useContext(AuthContext);

  // login useRequest
  const { run: runPostLogin } = useRequest(AUTH_API.login, {
    manual: true,
    throwOnError: true,
    onSuccess: (loginData) => setAuthState({ ...loginData, authed: true }),
    onError: (loginError) => setAuthState({ ...loginError, authed: false }),
  });

  // login useRequest
  // const { run: runPostLogout } = useRequest(AUTH_API.postLogout, {
  //   manual: true,
  //   onSuccess: (data) => setAuthState({ authed: false, ...data }),
  // });

  const login = runPostLogin;

  // const logout = runPostLogout;

  return {
    authState,
    setAuthState,
    login,
    // logout,
  };
}
