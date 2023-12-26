declare namespace IMenu {
  interface IMenuItem {
    id: number;
    title: string;
    cost: number;
    price: number;
  }

  interface IMenuCategory {
    id: number;
    title: string;
    quantity: number;
    unit: string;
    price: number;
  }

  interface ResMenus {
    id: number;
    name: string;
    description: string;
    items: Item[];
    status: string;
    createdAt: number;
    updatedAt?: any;
    deletedAt?: any;
  }

  interface ResFoods {
    id: number;
    name: string;
    description: string;
    price: number;
    ingredients: Ingredient[];
    status: string;
    createdAt: number;
    updatedAt?: any;
    deletedAt?: any;
  }

  interface Ingredient {
    id: number;
    qty: number;
    unit: Unit;
    product: Product;
  }

  interface Product {
    id: number;
    name: string;
    images?: string;
    barCode: string;
    status: string;
    category: Category;
    createdAt: number;
    updatedAt: number;
    deletedAt?: any;
  }

  interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    ingredients: Ingredient[];
    status: string;
    createdAt: number;
    updatedAt?: any;
    deletedAt?: any;
  }

  interface Product {
    id: number;
    name: string;
    images?: (null | string)[];
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

  interface Unit {
    id: number;
    name: string;
    description: string;
    status: string;
    createdAt: number;
    updatedAt?: any;
    deletedAt?: any;
  }
}
