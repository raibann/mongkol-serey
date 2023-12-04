import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const SUPPLIER_API = {
  getSupplierList: async ({
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
    const res: ISupplier.ResSuppliers = await HttpUtil.get(
      ROUTE_API.suppliersList,
      {
        params: {
          page: page,
          size: size || 10,
          search: search,
        },
      }
    );
    return res;
  },
  getSupplierDetails: async ({ id }: { id: number }) => {
    const res: ISupplier.ResSupplierDetails = await HttpUtil.get(
      ROUTE_API.suppliersDetails.replace(':id', `${id}`)
    );
    return res;
  },
  postNewSupplier: async ({
    payload,
  }: {
    payload: ISupplier.ReqSupplerAction;
  }) => {
    const res: ISupplier.ResSupplierDetails = await HttpUtil.post(
      ROUTE_API.addNewSupplier,
      payload
    );
    return res;
  },
  updateSupplier: async ({
    payload,
    id,
  }: {
    payload: ISupplier.ReqSupplerAction;
    id: string;
  }) => {
    const res: ISupplier.ResSupplierDetails = await HttpUtil.put(
      ROUTE_API.updateSupplier.replace(':id', `${id}`),
      payload
    );
    return res;
  },
  deleteSupplier: async ({ id }: { id: number }) => {
    const res: ISupplier.ResDelete = await HttpUtil.delete(
      ROUTE_API.deleteSupplier.replace(':id', `${id}`)
    );
    return res;
  },
};

export default SUPPLIER_API;
