import Image from "next/image";
import Link from "next/link";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function GeneralSettings({ userData }) {
  const [profileInfo, setProfileInfo] = useState({
    firstName: userData?.user[0]?.firstName,
    lastName: userData?.user[0]?.lastName,
    phone: userData.profile.phoneNumber,
    email: userData?.user[0]?.email,
    image: "/images/profile.jpg",
    job: "Yazılımcı",
    skills: [
      { id: 1, name: "MongoDB" },
      { id: 2, name: "ExpressJs" },
      { id: 3, name: "ReactJS" },
      { id: 4, name: "NodeJs" },
      { id: 5, name: "TailwindCss" },
      { id: 6, name: "Javascript" },
    ],
    courses: [
      {
        id: 1,
        courseName: "X Kursu",
        courseContent: "Javascript Eğitimi",
        graduationYear: "2019",
      },
    ],
    education: [
      {
        id: 1,
        schoolName: "Karadeniz Teknik Üniversitesi",
        schoolContent: "İktisat Bölümü",
        graduationYear: "2014",
      },
    ],
    title: "Jr. Full Stack Developer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis doloribus quam necessitatibus. Vero vitae labore et quidem enim error accusamus temporibus dolorum qui, rerum atque dolorem delectus ipsum ullam.",
  });
  const [searchSkills, setSearchSkills] = useState("");
  const [educationCategory, setEducationCategory] = useState("education");
  const [education, setEducation] = useState({
    institution: "",
    content: "",
    graduation: "",
  });
  const [courses, setCourses] = useState({
    institution: "",
    content: "",
    graduation: "",
  });
  const [hash, setHash] = useState(null);

  const { content, institution, graduation } = education;

  /* Functions */
  const handleEducationCategory = (e) => {
    if (e.target.name === "course") {
      setEducationCategory(e.target.value);
      setEducation({
        institution: "",
        content: "",
        graduation: "",
      });
    } else {
      setEducationCategory(e.target.value);
      setCourses({
        institution: "",
        content: "",
        graduation: "",
      });
    }
  };
  const handleEducation = (e) =>
    setEducation({ ...education, [e.target.name]: e.target.value });
  const handleCourses = (e) =>
    setCourses({
      ...courses,
      [e.target.name]: e.target.value,
    });
  const optionsArray = Array.from({ length: 50 }, (value, index) => {
    // burada her elemanı oluşturun
    return index + 1; // örnek olarak sadece elemanın sırasını döndürüyoruz
  });
  const profileHandler = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };
  /* Functions END */

  /* Hooks */
  const router = useRouter();
  const { asPath } = useRouter();
  useEffect(() => {
    setHash(asPath.split("#")[1] ? asPath.split("#")[1] : null);
  }, [asPath]);

  /* Hooks END*/

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
                {" "}
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
                  value={userData?.user[0].email}
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
                name="general-settings"
                onClick={(e) => setHash(e.currentTarget.name)}
                className="font-bold"
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
                <p className="text-3xl pb-3 text-indigo-900 font-bold">
                  Hoşgeldiniz{" "}
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
      {hash === "contact" ? (
        //Form page is starting here
        <div>
          <div className="flex justify-between w-full mb-10">
            <h2
              className="text-3xl text-gray-500 cursor-default font-bold"
              id="general-settings"
            >
              İletişim Ayarları
            </h2>{" "}
          </div>
          <div className="bg-white p-10 mb-10 flex flex-col justify-start items-start w-full ">
            <div className="w-1/2">
              <div className="my-2 flex justify-between items-start">
                <label
                  htmlFor="email"
                  className="p-2.5 mx-2 text-lg text-gray-500 font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 mx-2 font-semibold self-end"
                  placeholder="Email"
                  value={profileInfo.email === null ? "Email bilgisine ulaşılamadı" : profileInfo.email}
                  onChange={profileHandler}
                  required
                />
              </div>
              <div className="my-2 flex justify-between items-start">
                <label
                  htmlFor="phone"
                  className="p-2.5 mx-2 text-lg text-gray-500 font-bold"
                >
                  Telefon
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 mx-2 font-semibold self-end"
                  placeholder="Telefon"
                  value={userData.profile.phoneNumber}
                  onChange={profileHandler}
                  required
                />
              </div>
              <div className="my-2 flex justify-between items-start">
                <label
                  htmlFor="phone"
                  className="p-2.5 mx-2 text-lg text-gray-500 font-bold"
                >
                  Linkedin
                </label>
                <input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 mx-2 font-semibold self-end"
                  placeholder="Linkedin"
                  value={userData.profile.linkedin}
                  onChange={profileHandler}
                  required
                />
              </div>
              <div className="my-2 flex justify-between items-start">
                <label
                  htmlFor="phone"
                  className="p-2.5 mx-2 text-lg text-gray-500 font-bold"
                >
                  Instagram
                </label>
                <input
                  type="text"
                  name="instagram"
                  id="instagram"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 mx-2 font-semibold self-end"
                  placeholder="instagram"
                  value={userData.profile.instagram}
                  onChange={profileHandler}
                  required
                />
              </div>
              <div className="my-2 flex justify-between items-start">
                <label
                  htmlFor="facebook"
                  className="p-2.5 mx-2 text-lg text-gray-500 font-bold"
                >
                  Facebook
                </label>
                <input
                  type="text"
                  name="facebook"
                  id="facebook"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 mx-2 font-semibold self-end"
                  placeholder="Facebook"
                  value={userData.profile.facebook}
                  onChange={profileHandler}
                  required
                />
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
              id="contact"
            >
              İletişim Ayarları
            </h2>{" "}
            <span className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900">
              <AiFillEdit className="text-xl" />{" "}
              <button
                name="contact"
                onClick={(e) => setHash(e.currentTarget.name)}
                className=" font-bold"
              >
                Düzenle
              </button>
            </span>
          </div>
          <div className="bg-white p-10 mb-10 w-full">
            <div className="w-full flex justify-between items-center p-5">
              <div className="w-3/12 text-lg text-gray-500 font-bold">
                E-posta Adresi
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                {profileInfo.email}
              </div>
            </div>
            <div className="w-full border-y flex justify-between items-center p-5">
              <div className="w-3/12 text-lg text-gray-500 font-bold">
                Cep Numarası
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                {userData.profile.phoneNumber === null
                  ? "Girilmemiş"
                  : userData.profile.phoneNumber}
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-5">
              <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
                Linkedin
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                {userData.profile.linkedin === null
                  ? "Girilmemiş"
                  : userData.profile.linkedin}
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-5">
              <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
                Instagram
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                {userData.profile.instagram === null
                  ? "Girilmemiş"
                  : userData.profile.instagram}
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-5">
              <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
                Facebook
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                {userData.profile.facebook === null
                  ? "Girilmemiş"
                  : userData.profile.facebook}
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-5">
              <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
                Adres
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                {userData.profile.address === null
                  ? "Girilmemiş"
                  : userData.profile.address}
              </div>
            </div>
            
          </div>
        </div>
      )}
      {hash === "experience" ? (
        <div>
          <div className="flex justify-between w-full mb-10">
            <h2
              className="text-3xl text-gray-500 cursor-default font-bold"
              id="experience"
            >
              Uzmanı Olduğun Alanlar & Araçlar
            </h2>
          </div>
          <div className="bg-white p-10 mb-10">
            <div className="skils flex flex-col justify-start items-center flex-wrap">
              <input
                type="search"
                name="skills"
                id="skills"
                className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 mx-10 my-5 font-semibold self-start"
                placeholder="Yetenek Ara"
                value={searchSkills}
                onChange={(e) => setSearchSkills(e.target.value)}
                required
              />
              <div className="flex justify-start items-center flex-wrap">
                {profileInfo.skills.map((skill) => (
                  <Link
                    href="/"
                    key={skill.id}
                    className="py-3 px-7 text-gray-500 border m-1 rounded-md relative cursor-text"
                  >
                    {skill.name}
                    <button className="absolute top-1 right-1 w-6 h-6">
                      <svg
                        fill="none"
                        stroke="black"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </Link>
                ))}
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
        </div>
      ) : (
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
              <button
                name="experience"
                onClick={(e) => setHash(e.currentTarget.name)}
                className=" font-bold"
              >
                Düzenle
              </button>
            </span>
          </div>
          <div className="bg-white p-10 mb-10">
            <div className="skils flex justify-start items-center flex-wrap">
              {profileInfo.skills.map((skill) => (
                <Link
                  href="/"
                  key={skill.id}
                  className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
                >
                  {skill.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      {hash === "education" ? (
        <div>
          <div className="flex justify-between w-full mb-10">
            <h2
              className="text-3xl text-gray-500 cursor-default font-bold "
              id="education"
            >
              Eğitim ve Sertifika Bilgileri
            </h2>{" "}
          </div>
          <div className="bg-white p-10 mb-10 flex justify-between items-start">
            <div className="w-1/3">
              <p className="text-xl font-bold text-gray-500">Kategori:</p>
            </div>
            <div className="w-2/3">
              <div>
                <div className="flex justify-start items-center">
                  <label className="flex justify-start items-center text-lg text-gray-500 font-medium">
                    <input
                      type="radio"
                      value="education"
                      name="education"
                      className="w-6 h-6 mx-2"
                      checked={educationCategory === "education"}
                      onChange={handleEducationCategory}
                    />
                    Eğitim Bilgisi
                  </label>
                  <label className="flex justify-start items-center text-lg text-gray-500 font-medium">
                    <input
                      type="radio"
                      value="course"
                      name="course"
                      className="w-6 h-6 mx-2"
                      checked={educationCategory === "course"}
                      onChange={handleEducationCategory}
                    />
                    Sertifika Bilgisi
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 mb-10 flex flex-col justify-between items-start">
            {educationCategory === "education" ? (
              <div className="w-full">
                <input
                  type="text"
                  name="institution"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-1/2 p-2.5  my-5 font-semibold self-start"
                  placeholder="Okul Adı"
                  value={institution}
                  onChange={(e) => handleEducation(e)}
                  required
                />
                <input
                  type="text"
                  name="content"
                  id="depertmant"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-1/2 p-2.5  my-5 font-semibold self-start"
                  placeholder="Bölüm"
                  value={content}
                  onChange={(e) => handleEducation(e)}
                  required
                />
                <select
                  name="graduation"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-1/2 p-2.5  my-5 font-semibold self-start"
                  defaultValue={graduation}
                  onChange={(e) => handleEducation(e)}
                >
                  <option disabled selected value="Mezuniyet Yılı">
                    Mezuniyet Yılı
                  </option>
                  {optionsArray.map((_, index) => {
                    const date = new Date();
                    const year = date.getFullYear();
                    return (
                      <option
                        defaultChecked
                        value={2023 - index}
                        key={2023 - index}
                      >
                        {Number(year) - index}
                      </option>
                    );
                  })}
                </select>
              </div>
            ) : (
              <div className="w-full">
                <input
                  type="text"
                  name="institution"
                  id="institution"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-1/2 p-2.5  my-5 font-semibold self-start"
                  placeholder="Sertifika Kurumu Adı"
                  value={courses.institution}
                  onChange={(e) => handleCourses(e)}
                  required
                />
                <input
                  type="text"
                  name="content"
                  id="content"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-1/2 p-2.5  my-5 font-semibold self-start"
                  placeholder="Sertifika İçeriği"
                  value={courses.content}
                  onChange={(e) => handleCourses(e)}
                  required
                />
                <select
                  name="graduation"
                  id="graduation"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-1/2 p-2.5  my-5 font-semibold self-start"
                  defaultValue={courses.graduation}
                  onChange={(e) => handleCourses(e)}
                >
                  <option disabled selected value="Mezuniyet Yılı">
                    Mezuniyet Yılı
                  </option>
                  {optionsArray.map((_, index) => {
                    const date = new Date();
                    const year = date.getFullYear();
                    return (
                      <option defaultChecked value={2023 - index}>
                        {Number(year) - index}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

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
              className="text-3xl text-gray-500 cursor-default font-bold "
              id="education"
            >
              Eğitim ve Sertifika Bilgileri
            </h2>{" "}
          </div>
          <div className="bg-white p-10 mb-10 flex justify-between items-center">
            {profileInfo.education?.map((edu) => {
              return (
                <div key={edu.id}>
                  <span>{edu.schoolName}</span> -
                  <span>{edu.schoolContent}</span>
                </div>
              );
            })}
            {profileInfo.courses?.map((course) => {
              return (
                <div key={course.id}>
                  <span>{course.courseName}</span> -
                  <span>{course.courseContent}</span>
                </div>
              );
            })}
            {profileInfo.education.length < 0 &&
            profileInfo.courses.length < 0 ? (
              <div className="w-8/12">
                Eğitim bilgilerini veya varsa katıldığın sertifika programlarını
                eklemen alıcıların tercihte bulunmaları ve daha kolay teklif
                alman için faydalı olabilir.
              </div>
            ) : (
              ""
            )}

            <div className="w-4/12 flex justify-center items-center">
              <div className="add-skils">
                <button
                  name="education"
                  className="py-1 px-4 border-lime-600 text-lime-600 border-2 m-1 rounded-md hover:border-indigo-900 hover:bg-indigo-900 hover:text-lime-400"
                  onClick={(e) => setHash(e.currentTarget.name)}
                >
                  Ekle +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
