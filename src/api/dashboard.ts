import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const DASHBOARD_API = {
  getCharts: async () => {
    const res: IDashboard.IChart = await HttpUtil.get(ROUTE_API.charts);
    return res;
  },
  getTotals: async ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) => {
    const res: IDashboard.IDashboardData = await HttpUtil.get(
      ROUTE_API.totals,
      {
        params: {
          startDate: startDate,
          endDate: endDate,
        },
      }
    );
    return res;
  },
};

export default DASHBOARD_API;
