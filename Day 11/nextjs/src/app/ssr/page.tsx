/** @format */

import { api } from "@/config/axios.config";
import { IProduct } from "@/interfaces/product.interface";
import axios from "axios";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};
export default async function page({}: Props) {
  const test: any = (await axios.get("https://randomuser.me/api/")).data
    .results[0].name.first;
  const products: IProduct[] = (await api.get("/products")).data;
  return (
    <center>
      <div className="max-w-screen-sm grid grid-cols-3 gap-3">
        {products.map((product, key) => (
          <Link href={`/ssr/detail/${product.slug}`} key={key}>
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
          </Link>
        ))}
      </div>
    </center>
  );
}
