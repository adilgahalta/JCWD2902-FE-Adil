import { api } from "@/config/axios.config";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default async function Page({}: Props) {
  const products: IProduct[] = (await api.get("/products")).data;
  return (
    <center>
      <div className="max-w-screen-sm  grid  grid-cols-3 gap-3">
        {products.map((products, key) => (
          <Link href={`/ssr/detail/${products.id}`} key={key}>
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
          </Link>
        ))}
      </div>
    </center>
  );
}
