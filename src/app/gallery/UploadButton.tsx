"use client";
import { UploadIcon } from "@/components/icons/Upload";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import React from "react";

export function UploadButton() {
  const router = useRouter();
  return (
    <CldUploadButton
      uploadPreset="utga8sqo"
      className="btn btn-primary"
      onSuccess={(result) =>
        setTimeout(() => {
          router.refresh();
        }, 2000)
      }
    >
      <UploadIcon /> Upload
    </CldUploadButton>
  );
}
