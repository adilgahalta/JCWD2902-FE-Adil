/** @format */

import { api } from "@/config/axios.config";
import { IProduct } from "@/interfaces/product.interface";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
type Props = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const res = await api.get("/products");
  return res.data.map((product: IProduct) => ({
    params: {
      slug: product.slug,
    },
  }));
};

async function getProduct(slug: string) {
  // const res = await api.get("/products/", {
  //   params: {
  //     slug,
  //   },
  // });
  //ISR = Incremental Static Regeneration
  // build
  // dev

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/products?slug=" + slug,
    {
      next: {
        revalidate: 20,
      },
    }
  );
  const data = await res.json();

  if (data.length === 0) {
    return undefined;
  }
  return data[0];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product: IProduct = await getProduct(params.slug);
  if (!product) notFound();
  return {
    title: product.product_name,
    openGraph: {
      images: [product.img_url],
    },
  };
}

export default async function page({ params }: Props) {
  const product: IProduct = await getProduct(params.slug);
  if (!product) notFound();

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
