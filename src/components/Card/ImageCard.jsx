"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageCard = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-gallery">
      {/* Larger image */}
      <div className="larger-image relative w-full h-64 md:h-96">
        <Image
          src={selectedImage}
          alt="Selected"
          fill
          className="object-contain rounded-lg shadow-lg"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails flex gap-4 mt-4 overflow-x-auto">
        {images.map((image, index) => (
          <div key={index} className="thumbnail flex-shrink-0">
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={500}
              height={500}
            //   fill
              className={`w-20 h-20 object-cover rounded-md cursor-pointer transition-transform ${
                selectedImage === image ? "ring-4 ring-blue-500" : ""
              }`}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
