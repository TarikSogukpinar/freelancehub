import { useState } from "react";

export default function Security() {
  const [changePassword, setChangePasword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
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
                 - Yeni şifren en az 6, en çok 16 karakter uzunluğunda olmalıdır.
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
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
    </div>
  );
}
