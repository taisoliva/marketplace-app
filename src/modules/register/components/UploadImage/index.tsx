"use client";

import { RegisterSchema } from "@/modules/register/schemas/register.schema";
import { useAttachmentService } from "@/shared/data/hooks/useAttachment";
import { ImageUp } from "lucide-react";
import { useRef, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

interface UploadImageProps {
  setValue: UseFormSetValue<RegisterSchema>;
}
export const UploadImage = ({ setValue }: UploadImageProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const { mutateAsync: attachment } = useAttachmentService();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      const avatar = await attachment({
        files: file,
      });

      setValue("avatarId", avatar.attachments[0].id);
    }
  };

  return (
    <div
      className="w-32 h-32 bg-[#F5EAEA] rounded-xl flex items-center justify-center hover:cursor-pointer mt-5"
      onClick={handleClick}
    >
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Preview"
          className="w-full h-full object-cover rounded-xl"
        />
      ) : (
        <ImageUp className="text-primary" />
      )}
      <input
        type="file"
        className="sr-only"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};
