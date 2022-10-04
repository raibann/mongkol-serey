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
  accessToken: String;
  refreshToken: String;
}

interface IAuthContext {
  authState: IAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<IAuthState>>;
}

export const AuthContext = createContext<IAuthContext>({
  authState: {
    authed: false,
    refreshToken: '',
    accessToken: '',
  },
  setAuthState: () => {},
});

interface IAuthWrapper {
  children: React.ReactNode;
}

export function AuthWrapper({ children }: IAuthWrapper) {
  const initMount = useRef(true);
  const [authState, setAuthState] = useState<IAuthState>(
    getPersistedState(process.env.REACT_APP_PERSIST_AUTH) || { authed: false }
  );

  useEffect(() => {
    const vers = getPersistedState('version');
    if (vers && vers !== process.env.REACT_APP_PERSIST_VER) {
      localStorage.clear();
      persistState('version', process.env.REACT_APP_PERSIST_VER || '');
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
  const [loginErrorDialog, setLoginErrorDialog] = useState(false);

  const closeDialog = () => {
    setLoginErrorDialog(false);
  };

  // login useRequest
  const {
    run: login,
    loading,
    error,
  } = useRequest(AUTH_API.postLogin, {
    manual: true,
    onSuccess: (loginData) =>
      setAuthState({
        refreshToken: loginData.token.refresh_token,
        accessToken: loginData.token.access_token,
        authed: true,
      }),
    onError: () => {
      setLoginErrorDialog(true);
      setAuthState({ refreshToken: '', accessToken: '', authed: false });
    },
  });

  const logout = () => {
    setAuthState({
      authed: false,
      accessToken: '',
      refreshToken: '',
    });
  };

  return {
    authState,
    setAuthState,
    login,
    logout,
    loading,
    error,
    loginDialog: loginErrorDialog,
    closeDialog,
  };
}
