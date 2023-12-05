declare namespace ISupplier {
  interface ResSuppliers {
    data: ResSupplier[];
    totalItem: number;
    totalPage: number;
    message: string;
    status: number;
  }
  interface ResSupplierDetails {
    code: number;
    message: string;
    data: ResSupplier;
  }

  interface ResSupplier {
    id: number;
    image?: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    street: string;
    house: string;
    province: string;
    district: string;
    commune: string;
    socialMedia: string;
    others: string;
    defaultPayment: string;
    status: string;
    createdAt: number;
    updatedAt?: any;
    deletedAt?: any;
  }

  interface ReqSupplerAction {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    street: string;
    house: string;
    province: string;
    district: string;
    commune: string;
    socialMedia: string;
    others?: any;
    defaultPayment: string;
  }
  interface ResDelete {
    suppliersNo: string;
    successfully: string;
  }
}
