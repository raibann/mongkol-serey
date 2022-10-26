declare namespace IStock {
  interface IStockRespone {
    message: string;
    status: number;
    data: IStockDetails[];
  }

  interface IStockDetails {
    id: number;
    productName: string;
    quantity: number;
    usedStock: number;
    price: number;
    unit: string;
    shopName: string;
    currency: string;
    note: string;
    paidBy: string;
    createdAt?: any;
    updatedAt: number;
    deletedAt?: any;
  }
  interface IStockRequest {
    id?: number;
    productName: string;
    quantity: number;
    price: number;
    unit: string;
    shopName: string;
    currency: string;
    note: string;
    paidBy: string;
    usedStock: number;
  }
}
