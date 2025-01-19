import { ImageUp } from "lucide-react";
import { useRef } from "react";

export const UploadImage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div
      className="w-32 h-32 bg-[#F5EAEA] rounded-xl flex items-center justify-center hover:cursor-pointer mt-5"
      onClick={handleClick}
    >
      <ImageUp className="text-primary" />
      <input type="file" className="sr-only" ref={fileInputRef} />
    </div>
  );
};
