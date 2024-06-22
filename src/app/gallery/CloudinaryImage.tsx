"use client";
import { CldImage, CldImageProps } from "next-cloudinary";
import React from "react";
import { BurgerIcon } from "../components/icons/Burger";

const CloudinaryImage = ({ public_id, ...props }: { public_id: string }) => {
  return (
    <div className="relative">
      <CldImage
        {...props}
        src={public_id}
        height={400}
        width={600}
        sizes="100vw"
        alt="image"
        className="rounded-lg"
      />
      <div className="dropdown dropdown-end absolute top-2 right-2">
        <div tabIndex={0} role="button" className="btn btn-ghost p-3">
          <BurgerIcon />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </ div>
  );
};

export default CloudinaryImage;
