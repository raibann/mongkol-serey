import React, { createContext, useContext, useState } from 'react';

interface IDrawerContext {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerContext = createContext<IDrawerContext>({
  openDrawer: true,
  setOpenDrawer: () => {},
});

interface IAppWrapper {
  children: React.ReactNode;
}

export function DrawerWrapper({ children }: IAppWrapper) {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <DrawerContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawerContext() {
  return useContext(DrawerContext);
}
