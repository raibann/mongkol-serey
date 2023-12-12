import { ProductFormInput } from 'pages/Inventories/components/ProductForm';
import { InventoryInput } from 'pages/Inventories/pages/InventoryForm';
import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

export const STOCK_API = {
  stockDetail: async ({ id }: { id: number }) => {
    const res: { data: IStock.Stock } = await HttpUtil.get(
      ROUTE_API.stockDetail.replace(':id', `${id}`)
    );
    return res.data;
  },
  stockList: async ({ search }: { search?: string }) => {
    const res: IStock.IStockResponse = await HttpUtil.get(ROUTE_API.stockList, {
      params: {
        search: search,
      },
    });
    return res.data;
  },
  deleteStock: async (data: { id?: number }) => {
    const res = await HttpUtil.delete(
      ROUTE_API.deleteStock.replace(':id', `${data.id}`)
    );
    return res;
  },
  createStock: async (data: InventoryInput) => {
    const res = await HttpUtil.post(ROUTE_API.createStock, data);
    return res;
  },
  updateStock: async (data: InventoryInput) => {
    const res = await HttpUtil.put(
      ROUTE_API.deleteStock.replace(':id', `${data.id}`),
      data
    );
    return res;
  },
  stockAction: async (data: InventoryInput) => {
    if (data.id) {
      return STOCK_API.updateStock({ id: data.id, ...data });
    } else {
      return STOCK_API.createStock(data);
    }
  },
};

export const STOCK_PRODUCT_API = {
  productList: async ({ search }: { search?: string }) => {
    const res: IInventoryProduct.IInventoryProductResponse = await HttpUtil.get(
      ROUTE_API.productList,
      {
        params: {
          search: search,
        },
      }
    );
    return res.data;
  },
  productDetail: async ({ id }: { id: number }) => {
    const res: { data: IInventoryProduct.InventoryProduct } =
      await HttpUtil.get(ROUTE_API.productDetail.replace(':id', `${id}`));
    return res.data;
  },
  deleteProduct: async (data: { id?: number }) => {
    const res = await HttpUtil.delete(
      ROUTE_API.deleteProduct.replace(':id', `${data.id}`)
    );
    return res;
  },
  createProduct: async (data: ProductFormInput) => {
    const res: IInventoryProduct.InventoryProduct = await HttpUtil.post(
      ROUTE_API.createProduct,
      data
    );

    if (res.id) {
      await STOCK_API.createStock({
        category: res.category.id,
        paidBy: '',
        addStock: false,
        quantity: 0,
        priceUsd: 0,
        priceKh: 0,
        discount: 0,
        expiryDate: '',
        currency: { id: 1 },
        product: {
          id: res.id,
        },
        unit: undefined,
        suppliers: undefined,
        pricing: [],
      });
    }
    return res;
  },
  updateProduct: async (data: ProductFormInput) => {
    const res = await HttpUtil.put(
      ROUTE_API.deleteProduct.replace(':id', `${data.id}`),
      data
    );
    return res;
  },
  productAction: async (data: ProductFormInput) => {
    if (data.id) {
      return STOCK_PRODUCT_API.updateProduct({ id: data.id, ...data });
    } else {
      return STOCK_PRODUCT_API.createProduct(data);
    }
  },
};

export const STOCK_UNIT_API = {
  unitDetail: async ({ id }: { id: number }) => {
    const res: { data: IInventoryUnit.InventoryUnit } = await HttpUtil.get(
      ROUTE_API.unitDetail.replace(':id', `${id}`)
    );
    return res.data;
  },
  unitList: async ({ search }: { search?: string }) => {
    const res: IInventoryUnit.IInventoryUnitResponse = await HttpUtil.get(
      ROUTE_API.unitList,
      {
        params: {
          search: search,
        },
      }
    );
    return res.data;
  },
  deleteUnit: async (data: { id?: number }) => {
    const res = await HttpUtil.delete(
      ROUTE_API.deleteUnit.replace(':id', `${data.id}`)
    );
    return res;
  },
  createUnit: async (data: { name: string; description?: string }) => {
    const res = await HttpUtil.post(ROUTE_API.createUnit, data);
    return res;
  },
  updateUnit: async (data: {
    id: number;
    name: string;
    description?: string;
  }) => {
    const res = await HttpUtil.put(
      ROUTE_API.updateUnit.replace(':id', `${data.id}`),
      data
    );
    return res;
  },
  unitAction: async (data: {
    id?: number;
    name: string;
    description?: string;
  }) => {
    if (data.id) {
      return STOCK_UNIT_API.updateUnit({ id: data.id, ...data });
    } else {
      return STOCK_UNIT_API.createUnit(data);
    }
  },
};

export const STOCK_CATEGORY_API = {
  categoryDetail: async ({ id }: { id: number }) => {
    const res: { data: IInventoryCategory.InventoryCategory } =
      await HttpUtil.get(ROUTE_API.stockCategoryDetail.replace(':id', `${id}`));
    return res.data;
  },
  categoryList: async ({ search }: { search?: string }) => {
    const res: IInventoryCategory.IInventoryCategoryResponse =
      await HttpUtil.get(ROUTE_API.stockCategoryList, {
        params: {
          search: search,
        },
      });
    return res.data;
  },
  createCategory: async (data: { name: string; description?: string }) => {
    const res = await HttpUtil.post(ROUTE_API.stockCreateCategory, data);
    return res;
  },
  deleteCategory: async (data: { id?: number }) => {
    const res = await HttpUtil.delete(
      ROUTE_API.stockDeleteCategory.replace(':id', `${data.id}`)
    );
    return res;
  },
  updateCategory: async (data: {
    id: number;
    name: string;
    groupType?: string;
  }) => {
    const res = await HttpUtil.put(
      ROUTE_API.stockUpdateCategory.replace(':id', `${data.id}`),
      data
    );
    return res;
  },
  categoryAction: async (data: {
    id?: number;
    name: string;
    groupType?: string;
  }) => {
    if (data.id) {
      return STOCK_CATEGORY_API.updateCategory({ id: data.id, ...data });
    } else {
      return STOCK_CATEGORY_API.createCategory(data);
    }
  },
};
