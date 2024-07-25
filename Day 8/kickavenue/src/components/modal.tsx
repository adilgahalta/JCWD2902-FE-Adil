/** @format */
"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ICard } from "@/interfaces/card.interface";
import { ProductContext } from "@/providers/product.provider";

export function DrawerDialogDemo({
  title,
  product_id,
}: {
  title: string | React.ReactNode;
  product_id?: number;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="px-[6px] text-nowrap hover:text-black  ">
          {title}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="m-auto">{title}</DialogTitle>
          <DialogDescription>
            {
              "create or make changes to your products here. Click save when you're done."
            }
          </DialogDescription>
        </DialogHeader>
        <ProductForm setOpen={setOpen} product_id={product_id} />
      </DialogContent>
    </Dialog>
  );
}

interface IProductForm extends React.ComponentProps<"form"> {
  product_id?: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ProductForm({ className, product_id, setOpen }: IProductForm) {
  const [input, setInput] = React.useState<ICard | null>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.id]: e.target.value } as ICard);
  };

  const { products, addProduct, editProduct, deleteProduct } =
    React.useContext(ProductContext)!;

  React.useEffect(() => {
    const find = products.find((_) => _.id == product_id);
    if (find) setInput({ ...find });
  }, [product_id, products]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product_id && input) {
      editProduct(product_id, { ...input, price: Number(input.price) });
    } else {
      const id = products[products.length - 1].id + 1;
      console.log(input);

      const data = { ...input, id, price: Number(input?.price) } as ICard;
      console.log(data);

      addProduct(data);
    }

    setInput(null);
    setOpen(false);
  };

  const onDelete = () => {
    deleteProduct(product_id!);
    setInput(null);
    setOpen(false);
  };
  return (
    <form
      className={cn("grid items-start gap-4", className)}
      onSubmit={onSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Product Name</Label>
        <Input
          type="name"
          id="product_name"
          placeholder="product name"
          onChange={handleChange}
          value={input?.product_name}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="img_src"
          placeholder="https://*.png"
          onChange={handleChange}
          value={input?.img_src}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          onChange={handleChange}
          placeholder="120,000"
          value={input?.price}
        />
      </div>
      <Button type="submit">Save changes</Button>
      <Button
        variant={"destructive"}
        className={`${product_id ? "block" : "hidden"}`}
        onClick={onDelete}
      >
        Delete
      </Button>
    </form>
  );
}
