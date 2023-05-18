import { AiFillEdit } from "react-icons/ai";

export default function BankAccount({ userData }) {
  return (
    <div>
      <div className="flex justify-between w-full mb-10">
        <h2 className="text-3xl text-gray-500 cursor-default font-bold">
          Banka Bilgileri
        </h2>
        <span className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900">
          <AiFillEdit className="text-xl" />
          <span className=" font-bold">Düzenle</span>
        </span>
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
          <div className="w-3/12 text-lg text-gray-500 font-bold">Soyad</div>
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
  );
}
