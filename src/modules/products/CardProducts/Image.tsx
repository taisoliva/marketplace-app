"use client";

import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

export const ProductImage = ({ src, alt }: ImageProps) => {
  return (
    <div className="w-full h-48 overflow-hidden rounded-lg relative p-4">
      <div className="flex absolute top-2 right-2 z-10 gap-2">
        <div className="bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-lg">
          {"Anunciado"}
        </div>
        <div className="bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-lg">
          {"Móvel"}
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
