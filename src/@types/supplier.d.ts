declare namespace ISupplier {
  interface ResSuppliers {
    response: ResSupplier[];
    totalRecord: number;
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
    others?: string;
    defaultPayment: string;
    status: string;
    createdAt: number;
    updatedAt?: any;
    deletedAt?: any;
    facebook?: string;
    telegram?: string;
    status: string;
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
    images?: string;
    facebook?: string;
    telegram?: any;
    others?: string;
    defaultPayment: string;
  }
  interface ResDelete {
    suppliersNo: string;
    successfully: string;
  }
}
