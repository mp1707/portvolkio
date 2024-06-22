"use server";
import cloudinary from "cloudinary";

export async function addImageToAlbum(public_id: string, album: string) {
  try {
    await cloudinary.v2.api.create_folder(album);
    await cloudinary.v2.api.update(public_id, {
      asset_folder: album,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteImage(public_id: string) {
  try {
    await cloudinary.v2.api.delete_resources([public_id]);
  } catch (error) {
    console.log(error);
  }
}
