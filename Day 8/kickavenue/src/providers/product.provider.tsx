/** @format */
"use client";
import { ICard } from "@/interfaces/card.interface";
import { IProductContext } from "@/interfaces/product.interface";
import React, { createContext, useState } from "react";

import { data } from "@/json/data.json";

type Props = { children: React.ReactNode };

export const ProductContext = createContext<IProductContext | null>(null);

export default function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState<ICard[]>([...data]);

  const [search, setSearch] = useState<string>("");

  const filter = (product_name: string) => setSearch(product_name);

  const deleteProduct = (id: number) =>
    setProducts((prev) => prev.filter((_) => _.id != id));

  const addProduct = (data: ICard) => setProducts([...products, data]);

  const editProduct = (id: number, data: ICard) => {
    const tmp = [...products];
    const findIdx = tmp.findIndex((_) => _.id == id);
    tmp[findIdx] = { ...tmp[findIdx], ...data };
    setProducts(tmp);
  };

  const contextValue = {
    products,
    deleteProduct,
    addProduct,
    editProduct,
    search,
    filter,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
