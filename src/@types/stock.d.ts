declare namespace IStock {
  interface IStockResponse {
    data: Stock[];
    totalItem: number;
    totalPage: number;
    message: string;
    status: number;
  }

  interface Stock {
    id?: number;
    quantity: number;
    priceKh?: any;
    priceUsd: number;
    defaultValueKh: number;
    defaultValueUsd: number;
    paidBy: string;
    groupType: string;
    expiryDate?: any;
    currency: Currency;
    product: Product;
    unit?: Unit;
    suppliers?: any;
    status: string;
    createdAt: number;
    updatedAt?: any;
    deletedAt?: any;
  }

  interface Unit {
    id: number;
    name: string;
    description: string;
    status: string;
    createdAt: number;
    updatedAt?: any;
    deletedAt?: any;
  }

  interface Product {
    id: number;
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

  interface Currency {
    id: number;
    name: string;
    description: string;
    value: number;
    status: string;
    createdAt: number;
    updatedAt?: any;
    deletedAt?: any;
  }

  interface StockReport {
    id: number;
    stockId: string;
    productName: string;
    unitType: string;
    action: string;
    quantity: number;
    priceKh: number;
    priceUsd: number;
    expiryDate?: number;
    addedByUser: AddedByUser;
    createdAt: number;
  }

  interface AddedByUser {
    id: number;
    name: string;
    username: string;
    roles: Role[];
  }

  interface Role {
    id: number;
    name: string;
    permission: any[];
  }
}
