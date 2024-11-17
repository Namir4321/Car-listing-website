import { fetchCarById, getAuthUser } from "@/utils/action";
import Image from "next/image";
import ImageCard from "@/components/Card/ImageCard";
import Link from "next/link";
import React from "react";
import { LuFileEdit } from "react-icons/lu";

const CarDetailPage = async ({ params }) => {
  const userId = await getAuthUser();
  const { id } = await params;
  if (!id) {
    return <p>Car ID not found.</p>;
  }

  const carDetails = await fetchCarById(id);
  if (!carDetails) {
    return <p>Car not found.</p>;
  }
  return (
    <div>
      <h1 className="text-5xl mt-5">
        {carDetails.title}
      </h1>
<ImageCard images={carDetails.images}/>
      {/* <Image
        src="https://pfkhxqpwrodtiqkjiimi.supabase.co/storage/v1/object/public/Blog-Image/blog/1726251498449-porsche%20911%20gt3%20rs.jpg"
        alt=""
        width={1200}
        height={1000}
      /> */}
      <div className="bg-green-100">
      
      </div>
      <div className="flex mt-4 gap-4 mb-2">
        <p className="text-xl">{carDetails.CarCompany}</p>
        <p className="text-xl">{carDetails.CarType}</p>
        {carDetails.profileId === userId && (
          <Link href={`/properties/${carDetails.id}/edit`}>
            <p className="mt-1">
              <LuFileEdit className="text-xl" />
            </p>
          </Link>
        )}
      </div>
      <h4 className="font-bold text-2xl">{carDetails.dealer}</h4>
      <p className="mt-2">{carDetails.description}</p>
      {/* Render more details as needed */}
    </div>
  );
};

export default CarDetailPage;
