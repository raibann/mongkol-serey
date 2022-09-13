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
    const res: ICustomer.ICustomerData = await HttpUtil.get(
      ROUTE_API.customersList,
      {
        params: {
          page: page,
          size: 10,
          search: search,
        },
      }
    );
    return res;
  },
  getCustomerDetails: async ({ id }: { id: number }) => {
    const res: ICustomer.ICustomerDetails = await HttpUtil.get(
      ROUTE_API.customerDetails.replace(':id', `${id}`)
    );
    return res;
  },
  postNewCustomer: async ({
    cusRequest,
  }: {
    cusRequest: ICustomer.ICustomerRequest;
  }) => {
    const res: ICustomer.ICustomerRequest = await HttpUtil.post(
      ROUTE_API.addCustomer,
      cusRequest
    );
    return res;
  },
};
export default CUSTOMER_API;
