"use client";
import { CldImage } from "next-cloudinary";
import React, { useRef, useState } from "react";
import { BurgerIcon } from "./icons/Burger";
import FolderPlus from "./icons/FolderPlus";
import Trash from "./icons/Trash";
import { AddToAlbumModal } from "./AddToAlbumModal";
import { deleteImage } from "../serverActions";

const CloudinaryImage = ({
  public_id,
  onDelete,
  ...props
}: {
  public_id: string;
  onDelete: (public_id: string) => void;
}) => {
  const [newAlbumName, setNewAlbumName] = useState("");

  const detailsRef = useRef<HTMLDetailsElement>(null); // Create a ref for the details element

  const toggleDropdown = (event: React.MouseEvent) => {
    // Prevent the default action to ensure custom behavior
    event.preventDefault();
    if (detailsRef.current?.hasAttribute("open")) {
      // If the dropdown is open, close it by removing the 'open' attribute
      detailsRef.current.removeAttribute("open");
    } else {
      // If the dropdown is closed, open it by setting the 'open' attribute
      detailsRef.current?.setAttribute("open", "");
    }
  };

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
      <details
        ref={detailsRef}
        className="dropdown dropdown-left absolute top-2 right-2"
        onClick={toggleDropdown}
      >
        <summary className="m-1 btn btn-ghost">
          <BurgerIcon />
        </summary>
        <ul className="p-2 shadow dropdown-content menu z-[1] bg-base-100 rounded-box w-52">
          <li>
            <button
              className="flex items-center gap-2 "
              onClick={() =>
                (
                  document.getElementById(public_id) as HTMLDialogElement
                )?.showModal()
              }
            >
              <FolderPlus />
              zu Album
            </button>
          </li>
          <li>
            <button
              className="flex items-center gap-2 "
              onClick={() => {
                deleteImage(public_id);
                onDelete(public_id);
              }}
            >
              <Trash />
              löschen
            </button>
          </li>
        </ul>
      </details>
      <AddToAlbumModal
        newAlbumName={newAlbumName}
        setNewAlbumName={setNewAlbumName}
        image={public_id}
      />
    </div>
  );
};

export default CloudinaryImage;
