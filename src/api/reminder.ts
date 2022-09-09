import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const REMINDER_API = {
  getReminder: async () => {
    const res: IReminder.IReminderData = await HttpUtil.get(
      ROUTE_API.remindersList
    );
    return res;
  },
};
export default REMINDER_API;
