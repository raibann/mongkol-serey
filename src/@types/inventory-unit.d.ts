declare namespace IInventoryUnit {
  interface IInventoryUnitResponse {
    response: InventoryUnit[];
    totalItem: number;
    totalPage: number;
    message: string;
    status: number;
  }

  interface InventoryUnit {
    id?: number;
    name: string;
    description?: string;
    status: string;
    createdAt: number;
    updatedAt?: any;
    deletedAt?: any;
  }
}
