import Image from "next/image";
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { ImExit } from "react-icons/im";

export default function GeneralSettings() {
  return (
    <div>
      <div>
        <div className="flex justify-between w-full mb-10">
          <h2 className="text-3xl text-gray-500 cursor-default font-bold">
            Profil Bilgileri
          </h2>{" "}
          <span className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900">
            <AiFillEdit className="text-xl" />{" "}
            <span className=" font-bold">Düzenle</span>
          </span>
        </div>
        <div className="bg-white p-10 mb-10 flex justify-start items-start w-full">
          <div className="profile flex justify-start items-center pb-2">
            <Image
              src={"/images/profile.jpg"}
              width={100}
              height={100}
              priority
              alt="profile"
              className="rounded-full border border-gray-500 shadow-indigo-900"
              style={{ filter: "drop-shadow(0 0 0.05rem lime)" }}
            />
          </div>
          <div className="flex flex-col ml-5 w-full">
            <div className="pb-5 border-b">
              <h2 className="text-3xl pb-3 text-indigo-900 font-bold">
                username
              </h2>
              <p className="text-xl text-gray-500 font-bold">Halit Uzan</p>
            </div>
            <div className="py-5">
              <h3 className="text-xl pb-5 text-lime-600 font-bold">
                Jr. Full Stack Developer
              </h3>
              <p className="text-md text-gray-500 font-medium">
                MERN Stack projelerinizi kısa sürede yapabilirim.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-full mb-10">
          <h2 className="text-3xl text-gray-500 cursor-default font-bold">
            İletişim Ayarları
          </h2>{" "}
          <span className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900">
            <AiFillEdit className="text-xl" />{" "}
            <span className=" font-bold">Düzenle</span>
          </span>
        </div>
        <div className="bg-white p-10 mb-10 w-full">
          <div className="w-full flex justify-between items-center p-5">
            <div className="w-3/12 text-lg text-gray-500 font-bold">
              E-posta Adresi
            </div>
            <div className="w-9/12 text-md text-gray-900 font-medium">
              halit@gmail.com{" "}
            </div>
          </div>
          <div className="w-full border-y flex justify-between items-center p-5">
            <div className="w-3/12 text-lg text-gray-500 font-bold">
              Cep Numarası
            </div>
            <div className="w-9/12 text-md text-gray-900 font-medium">
              0555555555{" "}
            </div>
          </div>
          <div className="w-full flex justify-between items-center p-5">
            <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
              Freelancer Hattı
            </div>
            <div className="w-9/12 text-md text-gray-900 font-medium">
              Bionluk Freelancer Hattı sayesinde kişisel numaranı paylaşmaksızın
              cep telefonun üzerinden tüm Bionluk kullanıcılarıyla güvenle
              görüşmeye başlayabilirsin. Ayrıntılı bilgi için destek sayfamızı
              ziyaret edebilirsin.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-full mb-10">
          <h2 className="text-3xl text-gray-500 cursor-default font-bold ">
            Uzmanı Olduğun Alanlar & Araçlar
          </h2>{" "}
          <span className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900">
            <AiFillEdit className="text-xl" />{" "}
            <span className=" font-bold">Düzenle</span>
          </span>
        </div>
        <div className="bg-white p-10 mb-10">
          <div className="skils flex justify-start items-center flex-wrap">
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              MongoDB
            </Link>
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              ExpressJs
            </Link>
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              ReactJS
            </Link>
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              NodeJs
            </Link>
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              TailwindCss
            </Link>
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              Javascript
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-full mb-10">
          <h2 className="text-3xl text-gray-500 cursor-default font-bold ">
            Eğitim ve Sertifika Bilgileri
          </h2>{" "}
        </div>
        <div className="bg-white p-10 mb-10 flex justify-between items-center">
          <div className="w-8/12">
            Eğitim bilgilerini veya varsa katıldığın sertifika programlarını
            eklemen alıcıların tercihte bulunmaları ve daha kolay teklif alman
            için faydalı olabilir.
          </div>
          <div className="w-4/12 flex justify-center items-center">
            <div className="add-skils">
              <Link
                href="/"
                className="py-1 px-4 border-lime-600 text-lime-600 border-2 m-1 rounded-md hover:border-indigo-900 hover:bg-indigo-900 hover:text-lime-400"
              >
                Ekle +
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-full mb-10">
          <h2 className="text-3xl text-gray-500 cursor-default font-bold ">
            Hesap Yönetimi
          </h2>{" "}
        </div>
        <div className="bg-white p-10 mb-10">
          <Link
            href="/"
            className="py-1 px-4 w-48 border-gray-400 border-dotted text-gray-400 border-2 m-1 rounded-md flex justify-center items-center"
          >
            <ImExit /> Hesabını Askıya Al
          </Link>
        </div>
      </div>
    </div>
  );
}
