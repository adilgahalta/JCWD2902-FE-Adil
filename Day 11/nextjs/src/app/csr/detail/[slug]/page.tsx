/** @format */
"use client";
import { api } from "@/config/axios.config";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [product, setProducts] = useState<IProduct>();
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get("/products", {
        params: { slug: params.slug },
      });
      // const res = await api.get("/products/"+params.id);
      setProducts(res.data[0]);
    };

    fetch();
  }, [params.slug]);

  return (
    <center>
      <div className="max-w-72">
        <Image
          alt="gambar product"
          src={product?.img_url!}
          width={231}
          height={231}
          className="w-full aspect-square object-cover"
        />
        <div className="text-xl">{product?.product_name}</div>
        <div className="text-lg font-bold">
          Rp. {product?.price.toLocaleString("id-ID")}
        </div>
      </div>
    </center>
  );
}
