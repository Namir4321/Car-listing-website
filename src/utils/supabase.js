import { createClient } from "@supabase/supabase-js";

const bucket = "Blog-Image";
const folder = "editor";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY;

const supabase = createClient(url, key);

export const ImageUpload = async (images) => {
  const publicUrls = [];

  for (const image of images) {
    const timestamp = Date.now();
    const newName = `${folder}/${timestamp}-${image.name}`;

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(newName, image, { cacheControl: "3600" });

    if (error) {
      console.error(`Failed to upload ${image.name}:`, error.message);
      continue;
    }

    const publicUrlResponse = supabase.storage
      .from(bucket)
      .getPublicUrl(newName);
    if (publicUrlResponse.error) {
      console.error(
        `Failed to get public URL for ${image.name}:`,
        publicUrlResponse.error.message
      );
      continue;
    }

    publicUrls.push(publicUrlResponse.data.publicUrl);
  }

  return publicUrls;
};
