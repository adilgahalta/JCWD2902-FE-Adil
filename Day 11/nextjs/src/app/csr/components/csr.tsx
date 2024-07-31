/** @format */
"use client";
import { api } from "@/config/axios.config";
import { IProduct } from "@/interfaces/product.interface";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export default function CSR({}: Props) {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetch = async () => {
      await axios.get("https://randomuser.me/api/");
      const res = await api.get("/products");
      setProducts(res.data);
    };
    fetch();
  }, []);

  return products.map((product, key) => (
    <Link href={`/csr/detail/${product.slug}`} key={key}>
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
  ));
}

export const DynamicCSR = dynamic(() => import("./csr"), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

export const LoadingSkeleton = () => {
  return (
    <>
      <div className=" w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-[205px] bg-slate-200 rounded"></div>
            <div className="flex gap-2 flex-col">
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-[205px] bg-slate-200 rounded"></div>
            <div className="flex gap-2 flex-col">
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-[205px] bg-slate-200 rounded"></div>
            <div className="flex gap-2 flex-col">
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
