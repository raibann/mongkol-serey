declare namespace IInventoryProduct {
  interface IInventoryProductResponse {
    data: Datum[];
    totalItem: number;
    totalPage: number;
    message: string;
    status: number;
  }

  interface InventoryProduct {
    id?: number;
    name: string;
    images?: any;
    barCode: string;
    status: string;
    category: Category;
    createdAt: number;
    updatedAt: number;
    deletedAt?: any;
  }

  interface Category {
    id: number;
    name: string;
    groupType: string;
    status: string;
    createdAt: number;
    updatedAt: number;
    deletedAt?: any;
  }
}
