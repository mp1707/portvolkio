"use client";
import React from "react";
import CloudinaryImage from "../components/CloudinaryImage";
import { CloudinaryImageType } from "../gallery/page";

export function ImageGrid(results: { resources: CloudinaryImageType[] }) {
  // optimistic UI
  const [images, setImages] = React.useState<CloudinaryImageType[]>(
    results.resources
  );

  return (
    <div className="columns-3xs w-full">
      <div className="flex flex-col items-center gap-5 w-full">
        {images &&
          images.map((image) => (
            <CloudinaryImage
              key={image.public_id}
              public_id={image.public_id}
              // optimistic UI
              onDelete={(public_id) => {
                setImages(
                  images.filter((image) => image.public_id !== public_id)
                );
              }}
            />
          ))}
      </div>
    </div>
  );
}
