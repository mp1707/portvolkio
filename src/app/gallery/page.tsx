import React from "react";
import { UploadButton } from "./UploadButton";
import cloudinary from "cloudinary";
import { ImageGrid } from "../components/ImageGrid";

type Props = {};

export type CloudinaryImageType = {
  public_id: string;
};

export default async function GalleryPage({}: Props) {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: CloudinaryImageType[] };

  console.log(results);

  return (
    <main className="w-full flex flex-col items-center gap-5">
      <div className="flex items-center w-full justify-between">
        <h1 className="text-xl font-bold">Galerie</h1>
        <UploadButton />
      </div>
      <ImageGrid resources={results.resources} />
    </main>
  );
}
