"use client";

import { ImageUp } from "lucide-react";
import React from "react";
export const ImageProduct = () => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div
      className="w-full h-full bg-[#F5EAEA] flex items-center justify-center hover:cursor-pointer"
      onClick={handleClick}
    >
      <ImageUp className="text-primary w-16 h-16" />

      <input type="file" className="sr-only" ref={fileInputRef} />
    </div>
  );
};
