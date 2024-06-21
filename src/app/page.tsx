"use client";

import {
  CldImage,
  CldUploadButton,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [imageID, setImageID] = useState<string | null>(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        uploadPreset="utga8sqo"
        onSuccess={(e: CloudinaryUploadWidgetResults) => {
          setImageID((e.info as CloudinaryUploadWidgetInfo)?.public_id);
        }}
      />
      {imageID && (
        <CldImage
          width="960"
          height="600"
          src={imageID}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
