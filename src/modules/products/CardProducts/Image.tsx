"use client";

import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

export const ProductImage = ({ src, alt }: ImageProps) => {
  return (
    <div className="w-full h-48 overflow-hidden rounded-lg relative p-4">
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
