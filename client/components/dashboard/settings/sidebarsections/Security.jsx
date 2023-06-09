import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loading-icons";
import { logoutUser } from "@/services/authService";
import { useRouter } from "next/router";
import { getUserLocationInformation } from "@/services/userService";

export default function Security() {
  const router = useRouter();
  const [changePassword, setChangePasword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [userInformation, setUserInformation] = useState({});
  const [userIpInformation, setUserIpInformation] = useState(null);

  const getUserInformation = async () => {
    const res = await getUserLocationInformation();
    setUserInformation(res.data.getLocation);
    setUserIpInformation(res.data.getIp);
  };
  const removeCookie = async () => {
    const data = await logoutUser();
    if (data.status === 200) {
      router.push("/login");
    }
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  const { currentPassword, newPassword, confirmNewPassword } = changePassword;
  const changeHandler = (e) => {
    setChangePasword({ ...changePassword, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <div className="flex justify-between w-full mb-5">
          <h2 className="text-3xl text-gray-500 cursor-default font-bold">
            Şifre Değiştir
          </h2>
        </div>
        <div className="bg-white p-10 mb-5  w-full">
          <div className="flex justify-between items-center pb-10 border-b">
            <div className="w-1/2">
              <div className="w-3/4">
                <p>
                  - Yeni şifren en az 6, en çok 16 karakter uzunluğunda
                  olmalıdır.
                </p>
                <p>
                  - Şifrenizde en az 1 er adet büyük harf, küçük harf, rakam ve
                  özel karakter bulunmalıdır.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                <div>
                  <input
                    type="text"
                    name="currentPassword"
                    id="currentPassword"
                    className="bg-gray-50 border border-gray-300 sm:text-sm roundedLg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Geçerli Şifren"
                    value={currentPassword}
                    onChange={(e) => changeHandler(e)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="newPassword"
                    id="newPassword"
                    placeholder="Yeni şifre"
                    className="bg-gray-50 border border-gray-300 sm:text-sm roundedLg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    value={newPassword}
                    onChange={(e) => changeHandler(e)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="confirmNewPassword"
                    id="confirmNewPassword"
                    placeholder="Yeni Şifreni Tekrarla"
                    className="bg-gray-50 border border-gray-300 sm:text-sm roundedLg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    value={confirmNewPassword}
                    onChange={(e) => changeHandler(e)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end pt-5">
            <button
              className={
                currentPassword && newPassword && confirmNewPassword
                  ? "p-4 w-48 bg-indigo-900 text-white font-bold border-2 m-1 rounded-md flex justify-center items-center"
                  : "p-4 w-48 border-gray-400 bg-gray-400 text-gray-500 font-bold border-2 m-1 rounded-md flex justify-center items-center"
              }
              disabled={
                currentPassword && newPassword && confirmNewPassword
                  ? false
                  : true
              }
            >
              Yeni Şirfeni Belirle
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-full mb-5">
          <h2 className="text-3xl text-gray-500 cursor-default font-bold">
            Geçerli Oturumlar
          </h2>
        </div>
        <div className="bg-white p-10 mb-5  w-full">
          <div className="flex flex-col justify-center items-center pb-10 divide-y">
            <div className="flex justify-between items-center w-full p-10">
              <div className="flex justify-start items-center">
                <div className="icon w-16 h-16 rounded-xl bg-gray-300 p-3 flex justify-center  items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-12 h-12 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col city text-lg ml-2 font-bold text-gray-600">
                  <span className="flex justify-start items-center">
                    Şehir:{" "}
                    {userInformation.city ? (
                      userInformation.city
                    ) : (
                      <ThreeDots fill="#000" height={"0.7em"} />
                    )}
                  </span>
                  <span className="flex justify-start items-center">
                    Time Zone:{" "}
                    {userInformation.timezone ? (
                      userInformation.timezone
                    ) : (
                      <ThreeDots fill="#000" height={"0.7em"} />
                    )}
                  </span>
                  <span className="flex justify-start items-center">
                    IP:{" "}
                    {userIpInformation ? (
                      userIpInformation
                    ) : (
                      <ThreeDots fill="#000" height={"0.7em"} />
                    )}
                  </span>
                </div>
              </div>
              <button className="text-lg font-medium" onClick={removeCookie}>
                Oturumu Kapat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
