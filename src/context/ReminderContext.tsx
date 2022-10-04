import React, { createContext, useContext, useEffect } from 'react';
import REMINDER_API from 'api/reminder';
import { useRequest } from 'ahooks';
import { useAuthContext } from 'context/AuthContext';

interface IReminderContext {
  reminderList: IReminder.Data[] | undefined;
  reminderLoading: boolean;
  reminderRefresh: () => void;
}

export const ReminderContext = createContext<IReminderContext>({
  reminderList: undefined,
  reminderLoading: true,
  reminderRefresh: () => {},
});

interface IReminderWrapper {
  children: React.ReactNode;
}

export function ReminderWrapper({ children }: IReminderWrapper) {
  const { authState } = useAuthContext();

  const {
    loading: reminderLoading,
    data: reminderData,
    refresh: reminderRefresh,
    run,
  } = useRequest(REMINDER_API.getReminder, {
    manual: true,
  });
  const reminderList = reminderData?.data;

  useEffect(() => {
    if (authState.accessToken !== '' && authState.authed) {
      run();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.accessToken]);

  return (
    <ReminderContext.Provider
      value={{ reminderList, reminderLoading, reminderRefresh }}
    >
      {children}
    </ReminderContext.Provider>
  );
}

export function useReminderContext() {
  return useContext(ReminderContext);
}
