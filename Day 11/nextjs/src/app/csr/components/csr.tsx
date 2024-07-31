"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/product.interface";
import { api } from "@/config/axios.config";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
type Props = {};

export const DynamicCSR = dynamic(() => import("./csr"), {
  loading: () => <div>loading</div>,
  ssr: false,
});

export default function CSR({}: Props) {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get("/products");
      setProducts(res.data);
    };
    fetch();
  }, []);
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
