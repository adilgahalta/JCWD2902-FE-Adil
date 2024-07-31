"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { IProduct } from "@/interfaces/product.interface";
import { useParams } from "next/navigation";
import { api } from "@/config/axios.config";

export default function Page({}) {
  const [product, setProduct] = React.useState<IProduct>();
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get(`/products/${params.id}`);
      setProduct(res.data[0]);
    };
    fetch();
  }, [params.id]);
  return (
    <center>
      <div className="max-w-screen-sm  grid  grid-cols-3 gap-3">
        <div>
          <Image
            alt="gambar product"
            src={product?.img_url!}
            width={200}
            height={200}
            className="w-full aspect-square object-cover"
          />
          <div className="text-xl">{product?.product_name}</div>
          <div className="text-lg font-bold">
            Rp. {product?.price.toLocaleString("id-ID")}
          </div>
        </div>
      </div>
    </center>
  );
}
