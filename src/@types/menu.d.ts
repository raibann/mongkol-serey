declare namespace IMenuList {
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
}
