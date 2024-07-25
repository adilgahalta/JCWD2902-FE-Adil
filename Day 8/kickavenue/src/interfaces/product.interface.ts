/** @format */

import { ICard } from "./card.interface";

export interface IProductContext {
  products: ICard[];
  deleteProduct: (id: number) => void;
  addProduct: (data: ICard) => void;
  editProduct: (id: number, data: ICard) => void;
  filter: (product_name: string) => void;
  search: string;
}
