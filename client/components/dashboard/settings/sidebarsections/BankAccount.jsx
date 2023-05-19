import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

export default function BankAccount({ userData }) {
  console.log(userData);
  const [accountInfo, setAccountInfo] = useState({
    accountType: userData.user[0].roles === "user" ? "Bireysel" : "Kurumsal",
    firstName: userData.user[0].firstName,
    lastName: userData.user[0].lastName,
    phoneNumber: userData.profile.phoneNumber,
    iban: userData.profile.iban,
    address: userData.profile.address,
  });
  const { accountType, firstName, lastName, phoneNumber, address, iban } =
    accountInfo;
  const [hash, setHash] = useState(null);
  const bankAccountHandler = (e) => {
    setAccountInfo((prew) => ({
      ...prew,
      [e.target.name]: e.target.value,
    }));
  };
  const accountEdited = (edit) => {
    setHash(edit);
  };
  return (
    <>
      {hash === "bankaccount" ? (
        <div>
          <div className="flex justify-between w-full mb-10">
            <h2 className="text-3xl text-gray-500 cursor-default font-bold">
              Banka Bilgileri
            </h2>
          </div>
          <div className="bg-white p-10 mb-10 w-full">
            <div className="w-full flex border-b justify-between items-center p-5">
              <div className="w-3/12 text-lg text-gray-500 font-bold">
                Hesap Türü
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                <input
                  type="text"
                  name="accountType"
                  id="accountType"
                  value={accountType}
                  onChange={bankAccountHandler}
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5  font-semibold self-end"
                  placeholder="Hesap Türü"
                />
              </div>
            </div>
            <div className="w-full border-b flex justify-between items-center p-5">
              <div className="w-3/12 text-lg text-gray-500 font-bold">Ad</div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={bankAccountHandler}
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5  font-semibold self-end"
                  placeholder="Hesap Türü"
                />
              </div>
            </div>
            <div className="w-full border-b flex justify-between items-center p-5">
              <div className="w-3/12 text-lg text-gray-500 font-bold">
                Soyad
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={bankAccountHandler}
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5  font-semibold self-end"
                  placeholder="Hesap Türü"
                />
              </div>
            </div>
            <div className="w-full flex border-b justify-between items-center p-5">
              <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
                Cep Telefonu
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={bankAccountHandler}
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5  font-semibold self-end"
                  placeholder="Hesap Türü"
                />
              </div>
            </div>
            <div className="w-full flex border-b justify-between items-center p-5">
              <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
                IBAN
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                <input
                  type="text"
                  name="iban"
                  id="iban"
                  value={iban}
                  onChange={bankAccountHandler}
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5  font-semibold self-end"
                  placeholder="Hesap Türü"
                />
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-5">
              <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
                Adres Bilgisi
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={bankAccountHandler}
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5  font-semibold self-end"
                  placeholder="Hesap Türü"
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
            <h2 className="text-3xl text-gray-500 cursor-default font-bold">
              Banka Bilgileri
            </h2>
            <button
              onClick={() => accountEdited("bankaccount")}
              className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900"
            >
              <AiFillEdit className="text-xl" />
              <button
                className="font-bold"
                onClick={() => accountEdited("bankaccount")}
              >
                Düzenle
              </button>
            </button>
          </div>
          <div className="bg-white p-10 mb-10 w-full">
            <div className="w-full flex border-b justify-between items-center p-5">
              <div className="w-3/12 text-lg text-gray-500 font-bold">
                Hesap Türü
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                {userData.user[0].roles === "user" ? "Bireysel" : "Kurumsal"}
              </div>
            </div>
            <div className="w-full border-b flex justify-between items-center p-5">
              <div className="w-3/12 text-lg text-gray-500 font-bold">Ad</div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                {userData.user[0].firstName === null
                  ? "Girilmemiş"
                  : userData.user[0].firstName}
              </div>
            </div>
            <div className="w-full border-b flex justify-between items-center p-5">
              <div className="w-3/12 text-lg text-gray-500 font-bold">
                Soyad
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                {userData.user[0].lastName === null
                  ? "Girilmemiş"
                  : userData.user[0].lastName}
              </div>
            </div>
            <div className="w-full flex border-b justify-between items-center p-5">
              <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
                Cep Telefonu
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                {userData.profile.phoneNumber === null
                  ? " Girilmemiş "
                  : userData.profile.phoneNumber}
              </div>
            </div>
            <div className="w-full flex border-b justify-between items-center p-5">
              <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
                IBAN
              </div>
              <div className="w-9/12 text-md text-gray-900 font-medium">
                {userData.profile.iban === null
                  ? "Girilmemiş"
                  : userData.profile.iban}
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-5">
              <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
                Adres Bilgisi
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
    </>
  );
}
