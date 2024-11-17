import { z } from "zod";
export const ProfileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "firstname must be atleast 2 character" }),
  lastName: z
    .string()
    .min(2, { message: "lastname must be atleast 2 character" }),
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .optional(),
});

export const SignImSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(1, { message: "Password must be six character long." }),
});

export const RegisterSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "Please enter a valid name",
    }),
    lastName: z
      .string()
      .min(2, { message: "lastname must be atleast 2 character" }),
    username: z
      .string()
      .min(2, {
        message: "Please enter a valid username",
      })
      .refine((value) => /\d/.test(value), {
        message: "Username must contain at least one number",
      }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters long",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export const validateZodSchema = async (Schema, data) => {
  const validateResult = Schema.safeParse(data);
  if (!validateResult.success) {
    const errors = validateResult.error.errors.map((error) => error.message);
    console.log(errors);
    throw new Error(errors.join(", "));
  }
  return validateResult.data;
};

const validateFile = () => {
  const maxUploadSize = 1024 * 1024 * 3; // 3MB
  const acceptedFileTypes = ["image/"];

  return z
    .custom(
      (file) => file instanceof File || file?.size,
      "Input must be a file"
    )
    .refine(
      (file) => file.size <= maxUploadSize,
      "File size must be less than 3 MB"
    )
    .refine(
      (file) => acceptedFileTypes.some((type) => file.type.startsWith(type)),
      "File must be an image"
    );
};

export const imageSchema = z.object({
  images: z.array(validateFile()), 
});

export const CarSchema = z.object({
  title: z.string().min(2, {
    message: "Please enter a valid name",
  }),
  description: z.string().min(2, {
    message: "Please enter a valid name",
  }),
  dealer: z.string().min(2, {
    message: "Please enter a valid name",
  }),
  CarType: z.string().min(2, {
    message: "Please enter a valid name",
  }),
  CarCompany: z.string().min(2, {
    message: "Please enter a valid name",
  }),
  
});