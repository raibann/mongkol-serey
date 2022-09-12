import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const CUSTOMER_API = {
  getCustomerList: async ({
    page,
    search,
    size,
  }: {
    page?: number;
    size?: number;
    search?: string;
  }) => {
    const res: ICustomer.ICustomerRes = await HttpUtil.get(
      ROUTE_API.customersList,
      {
        params: {
          page: page,
          size: size,
          search: search,
        },
      }
    );
    return res;
  },
  getCustomerDetails: async (id: number) => {
    const res: ICustomer.ICustomerDetails = await HttpUtil.get(
      ROUTE_API.customerDetails.replace(':id', `${id}`)
    );
    return res;
  },
};
export default CUSTOMER_API;
