import Image from "next/image";
import Link from "next/link";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function GeneralSettings() {
  const [profileInfo, setProfileInfo] = useState({
    firstName: "Halit",
    lastName: "Uzan",
    username: "halituzan",
    image: "/images/profile.jpg",
    job: "Yazılımcı",
    title: "Jr. Full Stack Developer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis doloribus quam necessitatibus. Vero vitae labore et quidem enim error accusamus temporibus dolorum qui, rerum atque dolorem delectus ipsum ullam.",
  });

  const [hash, setHash] = useState(null);
  const router = useRouter();
  const { asPath } = useRouter();
  console.log(hash);
  useEffect(() => {
    setHash(asPath.split("#")[1] ? asPath.split("#")[1] : null);
  }, [asPath]);
  const profileHandler = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {hash === "general-settings" ? (
        <div>
          <div className="flex justify-between w-full mb-10">
            <h2
              className="text-3xl text-gray-500 cursor-default font-bold"
              id="general-settings"
            >
              Profil Bilgileri
            </h2>{" "}
          </div>
          <div className="bg-white p-10 mb-10 flex flex-col  justify-start items-start w-full ">
            <div className="profile flex justify-start items-center pb-5 border-b w-full relative">
              <Image
                src={profileInfo.image}
                width={100}
                height={100}
                priority
                alt="profile"
                className="rounded-full border border-gray-500 shadow-indigo-900"
                style={{ filter: "drop-shadow(0 0 0.05rem lime)" }}
              />
              <div className="absolute bottom-2 left-10 cursor-pointer rounded-full  w-6 h-6 bg-lime-500 flex justify-center items-center text-white font-bold text-xl p-0 m-0">
                <AiOutlinePlus />
              </div>
              <div className="username ml-2 self-start text-xl font-bold text-indigo-900">
                {profileInfo.username}{" "}
                <span className="text-lime-600 cursor-pointer text-sm">
                  [Değiştir]
                </span>
              </div>
            </div>
            <div className="py-5 w-full">
              <div className="w-full my-5 flex justify-center items-center">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 mx-2 font-semibold"
                  placeholder="Ad"
                  value={profileInfo.firstName}
                  onChange={(e) => profileHandler(e)}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 mx-2 font-semibold"
                  placeholder="Soyad"
                  onChange={(e) => profileHandler(e)}
                  value={profileInfo.lastName}
                  required
                />
              </div>
              <div className="w-full my-5 flex justify-center items-center">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 mx-2 font-semibold"
                  placeholder="Başlık"
                  value={profileInfo.title}
                  onChange={(e) => profileHandler(e)}
                  required
                />
                <select
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 mx-2 font-semibold"
                  name="job"
                  onChange={(e) => profileHandler(e)}
                >
                  <option
                    value="Tasarımcı"
                    selected={profileInfo.job === "Tasarımcı" ? true : false}
                  >
                    Tasarımcı
                  </option>
                  <option
                    selected={profileInfo.job === "Yazılımcı" ? true : false}
                    value="Yazılımcı"
                  >
                    Yazılımcı
                  </option>
                  <option
                    selected={
                      profileInfo.job === "Sosyal Medya Uzmanı" ? true : false
                    }
                    value="Sosyal Medya Uzmanı"
                  >
                    Sosyal Medya Uzmanı
                  </option>
                  <option
                    selected={profileInfo.job === "Editör" ? true : false}
                    value="Editör"
                  >
                    Editör
                  </option>
                </select>
              </div>
              <div className="w-full my-5 flex justify-center items-center">
                <textarea
                  rows="6"
                  cols="6"
                  name="bio"
                  placeholder="Hakkında"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mx-2 font-semibold"
                  value={profileInfo.bio}
                  onChange={(e) => profileHandler(e)}
                ></textarea>
              </div>
            </div>
            <div className="py-5 w-full flex justify-end items-center">
              <button
                className="font-medium mx-2 text-indigo-900 hover:text-white bg-white border border-gray-500 px-8 py-3 text-lg hover:bg-indigo-700 shadow-lg"
                onClick={() => {
                  setHash(null);
                }}
              >
                İptal
              </button>
              <button
                className="font-medium mx-2 text-white bg-indigo-900 border border-gray-500 px-8 py-3 text-lg hover:bg-indigo-700 shadow-lg"
                onClick={() => {
                  setHash(null);
                }}
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between w-full mb-10">
            <h2
              className="text-3xl text-gray-500 cursor-default font-bold"
              id="general-settings"
            >
              Profil Bilgileri
            </h2>{" "}
            <span className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900">
              <AiFillEdit className="text-xl" />{" "}
              <button
                onClick={() => setHash("general-settings")}
                className=" font-bold"
              >
                Düzenle
              </button>
            </span>
          </div>
          <div className="bg-white p-10 mb-10 flex justify-start items-start w-full">
            <div className="profile flex justify-start items-center pb-2">
              <Image
                src={profileInfo.image}
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
                  {profileInfo.username}
                </h2>
                <p className="text-xl text-gray-500 font-bold">
                  {profileInfo.firstName + " " + profileInfo.lastName}
                </p>
              </div>
              <div className="py-5">
                <h3 className="text-xl pb-5 text-lime-600 font-bold">
                  {profileInfo.title}
                </h3>
                <p className="text-md text-gray-500 font-medium">
                  {profileInfo.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="flex justify-between w-full mb-10">
          <h2
            className="text-3xl text-gray-500 cursor-default font-bold"
            id="contact"
          >
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
          <h2
            className="text-3xl text-gray-500 cursor-default font-bold"
            id="experience"
          >
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
          <h2
            className="text-3xl text-gray-500 cursor-default font-bold "
            id="education"
          >
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
