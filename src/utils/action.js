"use server";
import bcryptjs from "bcryptjs";
import { CarDataSchema, CarSchema, imageSchema } from "./FormValidation";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { validateZodSchema } from "./FormValidation";
import { ImageUpload } from "@/utils/supabase";
import { profile } from "console";
export const getAuthUser = async () => {
  const session = await auth();
  if (!session) return null;
  const UserId = session.user.id;
  return UserId;
};
export const hashPassword = async (password, saltRounds) => {
  try {
    const hashedPassword = await bcryptjs.hash(password, saltRounds);
    return hashedPassword;
  } catch (err) {
    return { message: err.message || "Password is not hased" };
  }
};
export const findUserByEmail = async (email, password) => {
  const user = await db.profile.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return { message: "User not found" };
  }

  const hashedpassword = await bcryptjs.compare(password, user.password);
  if (!hashedpassword) {
    return { message: "Invalid Email and Password" };
  }
  delete user.password;
  return user;
};

export const postAddCar = async (prevState, formData) => {
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);
    const images = formData.getAll("images");
    const imageFormData = new FormData();
    images.forEach((file) => {
      imageFormData.append("images", file, file.name); // Append each file
    });
    const validatedFields = await validateZodSchema(CarSchema, rawData);
    const validateImageFields = await validateZodSchema(imageSchema, { images });
    const fullpath = await ImageUpload(
      Array.isArray(validateImageFields.images)
      ? validateImageFields.images
      : [validateImageFields.images]
    );
    console.log({
      ...validatedFields,
      images:fullpath,
      profileId: user,
    });
    console.log(typeof(images))
    
   const carData = {
     ...validatedFields,
     images: fullpath,
     profileId: user,
   };
   await db.cars.create({
     data: carData,
   });
  } catch (err) {
    // console.log(err);
    return { message: err.message };
  }
  // redirect("/");
};
export const fetchCars = async (search="") => {
  try {
    const carslist = await db.cars.findMany({
      where: {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { CarType: { contains: search, mode: "insensitive" } },
          { CarCompany: { contains: search, mode: "insensitive" } },
        ],
      },
    });
    return carslist;
  } catch (err) {
    console.log(err);
  }
};
export const fetchCarById = async (Id) => {
  try {
    const cardetails = await db.cars.findUnique({
      where: {
        id: Id,
      },
    });
    return cardetails;
  } catch (err) {
    console.log(err);
  }
};
export const updateCarInfo = async (prevState, formData) => {
  const userId = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const images = formData.getAll("images"); // Extract images from formData
    const imageFormData = new FormData();

    images.forEach((file) => {
      imageFormData.append("images", file, file.name); // Append each file
    });

    // Validate fields using Zod schemas
    const validatedFields = await validateZodSchema(CarSchema, rawData);
    const validateImageFields = await validateZodSchema(imageSchema, {
      images,
    });

    // Upload images
    const fullpath = await ImageUpload(
      Array.isArray(validateImageFields.images)
        ? validateImageFields.images
        : [validateImageFields.images]
    );

    // Prepare the data for the update
    const carData = {
      ...validatedFields,
      images: fullpath, // Include uploaded images
      profileId: userId,
    };

    // Update the car in the database
    await db.cars.update({
      where: {
        id: rawData.id,
      },
      data: carData,
    });
  } catch (err) {
    return { message: err.message };
  }

  redirect("/");
};

