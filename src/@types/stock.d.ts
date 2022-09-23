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
    price: number;
    unit: string;
    shopName: string;
    note: string;
    paidBy: string;
    createdAt: number;
    updatedAt: number;
    deletedAt?: any;
  }
  interface IStockRequest {
    id?: nummber;
    productName: string;
    quantity: number;
    price: number;
    unit: string;
    shopName: string;
    note: string;
    paidBy: string;
  }
}
