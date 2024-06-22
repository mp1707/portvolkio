import React from "react";
import { Album } from "./page";
import Link from "next/link";

const AlbumCard = ({ folder }: { folder: Album }) => {
  return (
    <Link
      href={`/albums/${folder.path}`}
      key={folder.name}
      className="card bg-base-100 shadow-xl image-full hover:shadow-2xl"
    >
      <figure>
        {/* <Image
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{folder.name}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </Link>
  );
};

export default AlbumCard;
