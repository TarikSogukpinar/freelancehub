import Image from "next/image";
import Link from "next/link";

import { FcSlrBackSide } from "react-icons/fc";

export default function MainSection({userData}) {
  return (
    <div className="hero flex self-start flex-col w-full mx-20 ">
      <div className="portfolio bg-white p-4 mb-10 shadow">
        <div className="gallery p-10 pt-2">
          <div className="flex flex-col justify-center items-start">
            <div className="flex justify-between items-center w-full">
              <h2 className="font-bold text-2xl">Portfolyo</h2>
              <Link
                href={"/"}
                className="text-lime-600 font-bold hover:underline"
              >
                {" "}
                Portfolyoyu Görüntüle
              </Link>
            </div>
            <div className="images mt-4 flex justify-center items-center w-full">
              <Link href={"/"} className="mx-2 shadow-md hover:shadow-xl">
                <Image
                  src={"/images/placeholder-1.jpg"}
                  width={200}
                  height={100}
                  className="rounded-md"
                  alt="gallery"
                />
              </Link>
              <Link href={"/"} className="mx-2 shadow-md hover:shadow-xl">
                <Image
                  src={"/images/placeholder-2.jpg"}
                  width={200}
                  height={100}
                  className="rounded-md"
                  alt="gallery"
                />
              </Link>
              <Link href={"/"} className="mx-2 shadow-md hover:shadow-xl">
                <Image
                  src={"/images/placeholder-3.jpg"}
                  width={200}
                  height={100}
                  className="rounded-md"
                  alt="gallery"
                />
              </Link>
              <Link href={"/"} className="mx-2 shadow-md hover:shadow-xl">
                <Image
                  src={"/images/placeholder-1.jpg"}
                  width={200}
                  height={100}
                  className="rounded-md"
                  alt="gallery"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="services bg-white p-4 mb-10 shadow">
        <div className="p-10 pt-2">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-between items-center w-full">
              <h2 className="font-bold text-2xl">Verdiğin Hizmetler</h2>{" "}
              <Link
                href={"/"}
                className="text-lime-600 font-bold hover:underline"
              >
                Tüm ilanlarına git
              </Link>
            </div>
            <div className="icon flex flex-col justify-center items-center w-3/4">
              <FcSlrBackSide className="my-5" style={{ fontSize: "20rem" }} />
              <p className="text-center font-bold text-4xl my-5">
                İlanlarını Yönet{" "}
              </p>
              <p className="text-center font-bold text-xl text-gray-500 my-5">
                Sevgili Halit, aktif ilanın yok gözüküyor. İlanlarım sayfasından
                tüm ilanlarını yönetebilirsin.
              </p>
              <Link
                className="my-10 font-medium text-white bg-indigo-900 border border-gray-500 px-10 py-4 text-xl hover:bg-indigo-700 shadow-lg"
                href={"/"}
              >
                İlanları Yönet
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="reviews bg-white py-4 px-0 mb-10 shadow">
        <div className="pt-2">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-between items-center w-full mb-10 px-5">
              <h2 className="font-bold text-2xl">Tüm Değerlendirmelerin</h2>
            </div>
            <div className="reviews py-20 border-b-2 border-t-2 border-separate w-full bg-gray-200">
                asd
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
