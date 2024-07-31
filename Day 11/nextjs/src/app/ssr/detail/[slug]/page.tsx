/** @format */

import { api } from "@/config/axios.config";
import { IProduct } from "@/interfaces/product.interface";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

async function getProduct(slug: string) {
  const res = await api.get("/products/", {
    params: {
      slug,
    },
  });
  return res.data[0];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product: IProduct = await getProduct(params.slug);
  return {
    title: product.product_name,
    openGraph: {
      images: [product.img_url],
    },
  };
}

export default async function page({ params }: Props) {
  const product: IProduct = await getProduct(params.slug);
  return (
    <center>
      <div className="max-w-72">
        <Image
          alt="gambar product"
          src={product.img_url}
          width={231}
          height={231}
          className="w-full aspect-square object-cover"
        />
        <div className="text-xl">{product.product_name}</div>
        <div className="text-lg font-bold">
          Rp. {product.price.toLocaleString("id-ID")}
        </div>
      </div>
    </center>
  );
}
