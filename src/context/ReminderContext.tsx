import { useRequest } from 'ahooks';
import REMINDER_API from 'api/reminder';
import React, { createContext, useContext } from 'react';

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
  const {
    loading: reminderLoading,
    data: reminderData,
    refresh: reminderRefresh,
  } = useRequest(REMINDER_API.getReminder, {
    manual: false,
  });
  const reminderList = reminderData?.data;
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
