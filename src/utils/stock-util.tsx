export interface IStockData {
  id: number;
  cateName: string;
  productName: string;
  quantity: {
    value: number;
    unit: string;
  };
  price: {
    value: number;
    currency: string;
  };
  shopName: string;
  paidBy: string;
  totalPrice: {
    value: number;
    currency: string;
  };
  inStock: {
    value: number;
    unit: string;
  };
}
const stockData: IStockData[] = [
  {
    id: 1,
    cateName: 'Groceries',
    productName: 'Soy Sauce',
    quantity: {
      value: 10,
      unit: 'packages',
    },
    price: {
      value: 5,
      currency: '$',
    },
    shopName: 'Psa Tmey',
    paidBy: 'Cash',
    totalPrice: {
      value: 50,
      currency: '$',
    },
    inStock: {
      value: 5,
      unit: 'packages',
    },
  },
  {
    id: 2,
    cateName: 'Drinks',
    productName: 'Singha Beer',
    quantity: {
      value: 10,
      unit: 'cases',
    },
    price: {
      value: 15,
      currency: '$',
    },
    shopName: 'Psa Tmey',
    paidBy: 'Cash',
    totalPrice: {
      value: 150,
      currency: '$',
    },
    inStock: {
      value: 5,
      unit: 'packages',
    },
  },
  {
    id: 3,
    cateName: 'Fruit',
    productName: 'Apple',
    quantity: {
      value: 10,
      unit: 'packages',
    },
    price: {
      value: 5,
      currency: '$',
    },
    shopName: 'Psa Tmey',
    paidBy: 'Cash',
    totalPrice: {
      value: 50,
      currency: '$',
    },
    inStock: {
      value: 5,
      unit: 'packages',
    },
  },
  {
    id: 4,
    cateName: 'Meat',
    productName: 'Beef',
    quantity: {
      value: 10,
      unit: 'Kg',
    },
    price: {
      value: 5,
      currency: '$',
    },
    shopName: 'Psa Tmey',
    paidBy: 'Cash',
    totalPrice: {
      value: 50,
      currency: '$',
    },
    inStock: {
      value: 5,
      unit: 'Kg',
    },
  },
];
const paidByBank = [
  'ACLEDA Bank',
  'ABA Bank',
  'WING Bank',
  'BAKONG',
  'CANADIA Bank',
  'SATHAPANA Bank',
  'WOORI WON Bank',
  'TRUE MONEY ',
  'AMK',
  'PRASAC',
  'PHILLIP Bank',
  'PRINCE Bank',
  'HATTHA Bank',
  'CP Bank',
  'VATTANAC Bank',
  'JTRUST ROYAL Bank',
  'FTB Bank',
  'PPC Bank',
  'CHIP MONG Bank',
  'MOHANOKOR',
  'SBI LY HOUR Bank',
  'MAY Bank',
  'eMoney Agent',
  'Pi Pay',
  'Cash',
];
const cateName = ['Grocery', 'Meat', 'Vegetable', 'Fruits', 'Drinks'];
export { stockData, paidByBank, cateName };
