"use client";
import React from "react";
import { addImageToAlbum } from "../serverActions";

export interface ModalProps {
  newAlbumName: string;
  setNewAlbumName: React.Dispatch<React.SetStateAction<string>>;
  image: string;
}

export function AddToAlbumModal({
  newAlbumName,
  setNewAlbumName,
  image,
}: ModalProps) {
  return (
    <dialog id={image} className="modal">
      <div className="modal-box flex gap-5 items-center align-center">
        {/* <h3 className="font-bold text-lg">Hello!</h3> */}
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">zu neuem Album hinzufügen</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={newAlbumName}
            onChange={(e) => {
              const newValue = e.target.value;
              // Regular expression to match only letters and numbers
              const allowedPattern = /^[a-zA-Z0-9äöüÄÖÜß]+$/;
              if (allowedPattern.test(newValue) || newValue === "") {
                setNewAlbumName(newValue);
              }
            }}
          />
          <div className="label"></div>
        </label>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn"
              type="submit"
              onClick={async (e) => {
                e.stopPropagation();
                await addImageToAlbum(image, newAlbumName);
                setNewAlbumName("");
              }}
            >
              hinzufügen
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
