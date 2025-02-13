"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import formContainer from "./formContainer";
import ImageInput from "./ImageInput";
import { LuUser2 } from "react-icons/lu";
import SubmitButton from "./ButtonProps";
import { updateProfileImageAction } from "@/utils/action";
export const ImageInputContainer = (props) => {
  const { image, name, text, action, children } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  const userIcon = (
    <LuUser2 className="w-24 h-24 bg-primary rounded text-white mb-4" />
  );
  return (
    <>
      <div>
        {image ? (
          <>
            <Image
              src={image}
              alt={name}
              width={100}
              height={100}
              className="rounded-lg object-cover mb-4 w-24 h-24"
            />
          </>
        ) : (
          userIcon
        )}
        <Button
          variant="outline"
          btnsize="sm"
          onClick={() => setUpdateFormVisible((prev) => !prev)}
        >
          {text}
        </Button>
        {isUpdateFormVisible && (
          <div className="max-w-lg mt-4">
            <formContainer action={action}>
              {children}
              <ImageInput />
              <SubmitButton btnsize="sm" text={text} />
            </formContainer>
          </div>
        )}
      </div>
    </>
  );
};
export default ImageInputContainer;
