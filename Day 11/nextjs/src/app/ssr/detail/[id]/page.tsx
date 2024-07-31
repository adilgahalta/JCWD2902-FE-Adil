import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { IProduct } from "@/interfaces/product.interface";
import { api } from "@/config/axios.config";
type Props = {
  params: {
    id: number;
  };
};

async function getProducts(id: number) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProducts(params.id);
  return {
    title: product.product_name,
    openGraph: {
      images: [product.img_url],
    },
  };
}

export default async function Page({ params }: Props) {
  const products: IProduct = await getProducts(params.id);
  return (
    <center>
      <div className="max-w-screen-sm  grid  grid-cols-3 gap-3">
        <div>
          <Image
            alt="gambar product"
            src={products.img_url}
            width={200}
            height={200}
            className="w-full aspect-square object-cover"
          />
          <div className="text-xl">{products.product_name}</div>
          <div className="text-lg font-bold">
            Rp. {products.price.toLocaleString("id-ID")}
          </div>
        </div>
      </div>
    </center>
  );
}
