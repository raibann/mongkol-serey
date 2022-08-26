export interface IFinalInvoice {
  customerInfo: ICustomerInfo;
  orderInfo: IOrderInfo;
}
// for booking invoice
export interface IBookingInvoice {
  customerInfo: ICustomerInfo;
  orderInfo: IOrderInfo;
}
interface ICustomerInfo {
  name: string;
  phone: string;
}
interface IOrderInfo {
  invoiceId: string;
  eventType: string;
  eventDate: string;
  bookingDate?: string;
  deposit: string;
  tables?: string;
  amountInKhmer?: string;
  eventLocation: string;
  paidBy?: string;
  listFoodOrder?: IListFoodOrders[];
  listOrdered?: IListOrdered[];
  totalPrice?: number;
  remainMoney?: number;
}
interface IListFoodOrders {
  id: number;
  category: string;
  quantity: string;
  units: string;
  price: string;
  list: IList[];
}
interface IListOrdered {
  id: number;
  title: string;
  quantity: {
    value: number;
    units: string;
  };
  price: number;
  subTotal: number;
}
interface IList {
  id: number;
  title: string;
  quantity: string;
  units: string;
  price: string;
}
const finalInvoice: IFinalInvoice = {
  customerInfo: {
    name: 'Sarin Chhun',
    phone: '070512364',
  },
  orderInfo: {
    eventDate: '08/07/2022',
    eventLocation: 'BoreyChaktomuk City',
    eventType: 'ម្ហូបកម្មវិធីរៀបការ',
    invoiceId: '00260',
    deposit: '300',
    totalPrice: 10050,
    remainMoney: 9750,
    listOrdered: [
      {
        id: 1,
        title: 'អាហារពេលល្ងាច ៖ Full',
        quantity: { value: 48, units: 'តុ' },
        price: 160,
        subTotal: 7680,
      },
      {
        id: 2,
        title: 'អាហារពេលល្ងាច ៖ Full',
        quantity: { value: 48, units: 'តុ' },
        price: 160,
        subTotal: 7680,
      },
      {
        id: 3,
        title: 'អាហារពេលល្ងាច ៖ Full',
        quantity: { value: 48, units: 'តុ' },
        price: 160,
        subTotal: 7680,
      },
    ],
  },
};

const bookingInvoice: IBookingInvoice = {
  customerInfo: {
    name: 'ច័ន្ទ ណុបវីរក្យា',
    phone: '098898869',
  },
  orderInfo: {
    invoiceId: '00264',
    eventType: 'កម្មវិធីភ្ជាប់ពាក្យ',
    bookingDate: '19/07/2022',
    tables: '15តុ',
    deposit: '200$',
    amountInKhmer: 'ពីររយដុល្លារអាមេរិកគត់',
    paidBy: 'ABA',
    eventDate: '12/08/2022',
    eventLocation: 'បុរីប៉េងហ៊ួតច្បារអំពៅ',
    listFoodOrder: [
      {
        id: 1,
        category: 'សម្ភារះគិតលុយ',
        price: '175',
        quantity: '15',
        units: 'តុ',
        list: [
          {
            id: 1,
            title: 'រោងកម្មវិធី',
            quantity: '4',
            units: 'នាក់',
            price: '15',
          },
        ],
      },
      {
        id: 2,
        category: '',
        price: '175',
        quantity: '15',
        units: 'តុ',
        list: [
          {
            id: 1,
            title: 'រោងកម្មវិធី',
            quantity: '',
            units: '',
            price: '',
          },
        ],
      },
    ],
  },
};
const pageStyle = ` @page {
    size: A4;
    margin:2.54cm;
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: always;
    }
  }`;

export { pageStyle, finalInvoice, bookingInvoice };
