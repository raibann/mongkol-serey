declare namespace ICustomer {
  interface ICustomerRespone {
    data: Customer[];
    totalItem: number;
    totalPage: number;
    message: string;
    status: number;
  }
  interface ICustomerDetails {
    orders: Order[];
    customer: Customer;
  }

  interface Order {
    id: number;
    date: string;
    bookingDate: string;
    location: string;
    type: string;
    quantity: number;
    deposit: number;
    amountInKhmer: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: any;
    finalInvoices: FinalInvoice[];
    eventPackages: EventPackage[];
    expenses: any[];
    customer: Customer;
  }

  interface Customer {
    id?: number;
    customer_name: string;
    facebook_name: string;
    telegram_name: string;
    contact_number: string;
    house: string;
    street: string;
    commune: string;
    district: string;
    province: string;
    location: string;
    customerType: string;
    history?: string;
    remarks?: string;
    status: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: any;
  }

  interface EventPackage {
    id: number;
    category: string;
    quantity: number;
    unit: string;
    price: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: any;
    packageItems: PackageItem[];
  }

  interface PackageItem {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: any;
  }

  interface FinalInvoice {
    id: number;
    category: string;
    quantity: number;
    unit: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    deletedAt?: any;
  }
  interface ICustomerRequest {
    id?: number;
    customer_name: string;
    facebook_name: string;
    telegram_name: string;
    contact_number: string;
    house: string;
    street: string;
    commune: string;
    district: string;
    province: string;
    location: string;
    customerType: string;
    remarks?: string;
    image?: string;
  }
}
