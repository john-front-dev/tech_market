export interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  sale: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
  category: ICategory;
  description?: string;
  characteristic: Record<string, string | string[]>;
}
