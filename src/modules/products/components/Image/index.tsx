"use client";

import { useAttachmentService } from "@/shared/data/hooks/useAttachment";
import { ImageUp } from "lucide-react";
import React, { useState } from "react";
import { useProductForm } from "../../context/form.context";

interface Props {
  imageId?: string | null;
  imageUrl?: string | null;
}
export const ImageProduct = ({ imageId, imageUrl }: Props) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null | undefined>(
    imageUrl
  );

  const {
    setValue,
    formState: { errors },
  } = useProductForm();

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (imageId) {
    setValue("attachmentsIds", [imageId]);
  }

  const { mutateAsync: attachment } = useAttachmentService();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      const images = await attachment({
        files: file,
      });

      setValue(
        "attachmentsIds",
        images.attachments.map((item) => item.id)
      );
    }
  };

  return (
    <div
      className="w-full h-full bg-[#F5EAEA] flex items-center justify-center hover:cursor-pointer rounded-xl"
      onClick={handleClick}
      onChange={handleFileChange}
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

      <input type="file" className="sr-only" ref={fileInputRef} />

      {errors.attachmentsIds && (
        <p className="text-primary">Anexo obrigatório</p>
      )}
    </div>
  );
};
