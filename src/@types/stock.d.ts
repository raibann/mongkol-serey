declare namespace IStock {
  interface IStockResponse {
    message: string;
    status: number;
    data: Stock[];
  }

  interface Stock {
    id?: number;
    productName: string;
    quantity: number;
    price: number;
    currency: string;
    paidBy: string;
    groupType: string;
    expiryDate?: any;
    product: Product;
    unit: Unit;
    suppliers: Suppliers;
    createdAt: number;
    updatedAt?: any;
    deletedAt?: any;
  }

  interface Suppliers {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    street: string;
    house: string;
    province: string;
    district: string;
    commune: string;
    images?: any;
    facebook: string;
    telegram: string;
    others: string;
    defaultPayment: string;
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
    deletedAt: number;
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
}
