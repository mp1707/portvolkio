import React from "react";
import cloudinary from "cloudinary";
import { ImageGrid } from "@/app/components/ImageGrid";

export type CloudinaryImageType = {
  public_id: string;
};

export default async function GalleryPage({
  params: { albumName },
}: {
  params: { albumName: string };
}) {
  const results = (await cloudinary.v2.search
    .expression(
      "resource_type:image AND folder:" + decodeURIComponent(albumName)
    )
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: CloudinaryImageType[] };

  console.log(results);

  return (
    <main className="w-full flex flex-col items-center gap-5">
      <div className="flex items-center w-full justify-start">
        <h1 className="text-xl font-bold">{decodeURIComponent(albumName)}</h1>
      </div>
      <ImageGrid resources={results?.resources} />
    </main>
  );
}
