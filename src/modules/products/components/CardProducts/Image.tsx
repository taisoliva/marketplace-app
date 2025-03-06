"use client";

import { cn } from "@/lib/utils";
import { eStatusProduct } from "@/shared/enums";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  tag: "available" | "sold" | "cancelled";
  category: string;
}

export const ProductImage = ({ src, alt, tag, category }: ImageProps) => {
  return (
    <div className="w-full h-48 overflow-hidden rounded-lg relative p-4">
      <div className="flex absolute top-2 right-2 z-10 gap-2">
        <div
          className={cn("text-white px-3 py-1 text-sm font-medium rounded-lg", {
            "bg-blue-500": tag === eStatusProduct.Available,
            "bg-green-500": tag === eStatusProduct.Sold,
            "bg-red-500": tag === eStatusProduct.Cancelled,
          })}
        >
          {tag === eStatusProduct.Available
            ? "Anunciado"
            : tag === eStatusProduct.Sold
            ? "Vendido"
            : "Cancelado"}
        </div>
        <div className="bg-zinc-500 text-white px-3 py-1 text-sm font-medium rounded-lg">
          {category}
        </div>
      </div>
      <Image
        src={src}
        alt={alt}
        className="object-cover w-full h-full rounded-lg"
        width={1920}
        height={1080}
        priority
      />
    </div>
  );
};
