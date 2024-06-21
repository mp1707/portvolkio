"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

const CloudinaryImage = ({ public_id, ...props }: { public_id: string }) => {
  return (
    <CldImage
      {...props}
      src={public_id}
      height={200}
      width={300}
      sizes="100vw"
      alt="image"
      className="object-cover rounded-md"
    />
  );
};

export default CloudinaryImage;
