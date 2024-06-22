import React from "react";
import cloudinary from "cloudinary";
import Image from "next/image";
import AlbumCard from "./AlbumCard";

export type Album = { name: string; path: string };

export default async function page() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Album[];
  };
  return (
    <main className="w-full flex flex-col items-center gap-5">
      <div className="flex items-center w-full justify-start">
        <h1 className="text-xl font-bold">Alben</h1>
        {/* <UploadButton /> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3">
        {folders &&
          folders.map((folder) => {
            return <AlbumCard key={folder.name} folder={folder} />;
          })}
      </div>
    </main>
  );
}
