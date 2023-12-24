declare namespace IInventoryCategory {
  interface IInventoryCategoryResponse {
    response: InventoryCategory[];
    totalRecords: number;
    totalPage: number;
    message: string;
    status: number;
  }

  interface InventoryCategory {
    id: number;
    name: string;
    groupType: string;
    status: string;
    createdAt: number;
    updatedAt: number;
    deletedAt?: any;
  }
}
