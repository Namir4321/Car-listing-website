import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuFileEdit } from "react-icons/lu";

const CarCard = ({ carslist }) => {
  const { title, description, CarType, CarCompany,id,images } = carslist;
  console.log(title);
  return (
    <article className="group relative">
      <Link href={`/compare/${id}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
          <Image
            src={images[0]}
            fill
            sizes="(max-width:768px) 100vw,50vw,50vw"
            alt={title}
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold mt-1">{title}</h3>
        </div>
        <p className="text-sm mt-1 text-muted-foreground">
          {description.substring(0, 60)}
        </p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm mt-1 flex space-x-4">
            <span>{CarCompany}</span>
            <span>{CarType}</span>
          </p>
        </div>
      </Link>
      <div className="absolute top-5 right-5 z-5"></div>
    </article>
  );
};

export default CarCard;
