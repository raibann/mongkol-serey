import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { persistState, getPersistedState } from 'utils/persist-util';

interface IAppContext {
  globalState: any;
  setGlobalState: React.Dispatch<any>;
}

export const AppContext = createContext<IAppContext>({
  globalState: { authed: false },
  setGlobalState: () => {},
});

interface IAppWrapper {
  children: React.ReactNode;
}

export function AppWrapper({ children }: IAppWrapper) {
  const initMount = useRef(true);
  const [globalState, setGlobalState] = useState('');

  useEffect(() => {
    const vers = getPersistedState('version');
    if (vers && vers === process.env.REACT_APP_PERSIST_VER) {
      const gState = getPersistedState(process.env.REACT_APP_PERSIST_KEY);
      if (gState) {
        setGlobalState(gState);
      }
    } else {
      localStorage.clear();
      persistState('version', process.env.REACT_APP_PERSIST_VER || '');
    }
  }, []);

  useEffect(() => {
    if (!initMount.current) {
      persistState(process.env.REACT_APP_PERSIST_KEY || '', globalState);
    } else initMount.current = false;
  }, [globalState]);

  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
