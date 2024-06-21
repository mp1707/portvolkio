import React from "react";
import { UploadButton } from "./UploadButton";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import CloudinaryImage from "./CloudinaryImage";

type Props = {};

type SearchResult = {
  public_id: string;
};

export default async function GalleryPage({}: Props) {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  console.log(results);

  return (
    <section className="w-full flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Galerie</h1>
        <UploadButton />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results &&
          results.resources.map((result) => (
            <CloudinaryImage
              key={result.public_id}
              public_id={result.public_id}
            />
          ))}
      </div>
    </section>
  );
}
