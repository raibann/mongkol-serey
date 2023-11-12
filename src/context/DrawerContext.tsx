import useResponsive from 'hook/useResponsive';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getPersistedState, persistState } from 'utils/persist-util';

interface IDrawerContext {
  collapse: boolean;
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerContext = createContext<IDrawerContext>({
  collapse: false,
  openDrawer: false,
  setOpenDrawer() {},
  setCollapse() {},
});

interface IAppWrapper {
  children: React.ReactNode;
}

export function DrawerWrapper({ children }: IAppWrapper) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [collapse, setCollapse] = useState(
    getPersistedState('collapse') || false
  );
  const { isMdDown } = useResponsive();
  useEffect(() => {
    persistState('collapse', collapse);
  }, [collapse]);

  useEffect(() => {
    isMdDown && setCollapse(false);
  }, [isMdDown]);

  return (
    <DrawerContext.Provider
      value={{ openDrawer, setOpenDrawer, collapse, setCollapse }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawerContext() {
  return useContext(DrawerContext);
}
