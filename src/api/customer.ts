import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const CUSTOMER_API = {
  getCustomerList: async ({
    page,
    search,
    size,
    type,
  }: {
    page?: number;
    size?: number;
    search?: string;
    type: string;
  }) => {
    const res: ICustomer.ICustomerRespone = await HttpUtil.get(
      ROUTE_API.customersList,
      {
        params: {
          page: page,
          size: size || 10,
          search: search,
          customerType: type,
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
  updateCustomer: async ({
    cusRequest,
    id,
  }: {
    cusRequest: ICustomer.ICustomerRequest;
    id: string;
  }) => {
    const res: ICustomer.ICustomerDetails = await HttpUtil.put(
      ROUTE_API.updateCustomer.replace(':id', `${id}`),
      cusRequest
    );
    return res;
  },
  deleteCustomer: async ({ id }: { id: number }) => {
    const res: ICustomer.ICustomerDetails = await HttpUtil.delete(
      ROUTE_API.deletCustomer.replace(':id', `${id}`)
    );
    return res;
  },
};
export default CUSTOMER_API;
