/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {};
interface IImg {
  src: string;
  name?: string;
}
export default function Page({}: Props) {
  const imgRef = useRef<null | HTMLInputElement>(null);
  const inputRef = useRef<string | HTMLInputElement>("");
  const img_default: IImg = {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlW8c8_By3m-OFvgL4wx07JUcpmWcv29M42HEpdxmPEyrGcvREWXkL82pK6bf0_cFVpBA&usqp=CAU",
    name: "",
  };
  const [img, setImg] = useState<IImg>({ ...img_default });

  return (
    <center className="mt-24 ">
      <center className="flex gap-4 flex-col max-w-[250px]">
        <input
          type="file"
          name=""
          id=""
          accept="image/jpeg, image/png, image/jpg"
          className="hidden"
          ref={imgRef}
          onChange={(e) => {
            if (e.target.files?.length) {
              console.log(e.target.files[0]);

              const src = URL.createObjectURL(e.target.files[0]);
              setImg({ ...img, src, name: e.target.files[0].name });
            }
          }}
        />

        <input
          type="text"
          className="border py-3 px-4"
          placeholder="type something"
          onChange={(e) => {
            inputRef.current = e.target.value;
          }}
        />

        <div className="flex gap-2 ">
          <div>
            <picture>
              <img
                width={250}
                className=" aspect-square cursor-pointer rounded-full object-cover"
                src={img.src}
                alt=""
                onClick={() => imgRef.current?.click()}
              />
            </picture>

            <b className=" justify-center flex text-ellipsis overflow-hidden text-nowrap  max-w-[250px] ">
              {img.name}
            </b>
          </div>
          <button
            className=" font-bold text-red-500 text-lg flex "
            onClick={() => setImg(img_default)}
          >
            x
          </button>
        </div>
      </center>
    </center>
  );
}
