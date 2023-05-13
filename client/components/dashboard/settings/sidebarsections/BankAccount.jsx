import { AiFillEdit } from "react-icons/ai";

export default function BankAccount({userData}) {
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
            Bireysel Hesap
          </div>
        </div>
        <div className="w-full border-b flex justify-between items-center p-5">
          <div className="w-3/12 text-lg text-gray-500 font-bold">
            Ad & Soyad
          </div>
          <div className="w-9/12 text-md text-gray-900 font-medium">
            Halit Uzan
          </div>
        </div>
        <div className="w-full flex border-b justify-between items-center p-5">
          <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
            T.C. Kimlik No
          </div>
          <div className="w-9/12 text-md text-gray-900 font-medium">
            11111111111
          </div>
        </div>
        <div className="w-full flex border-b justify-between items-center p-5">
          <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
            Cep Telefonu
          </div>
          <div className="w-9/12 text-md text-gray-900 font-medium">
            0555555555
          </div>
        </div>
        <div className="w-full flex border-b justify-between items-center p-5">
          <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
            IBAN
          </div>
          <div className="w-9/12 text-md text-gray-900 font-bold">
            TR1234567890123456
          </div>
        </div>
        <div className="w-full flex justify-between items-center p-5">
          <div className="w-3/12 self-start text-lg text-gray-500 font-bold">
            Adres Bilgisi
          </div>
          <div className="w-9/12 text-md text-gray-900 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sint
            vitae deserunt quam cum perspiciatis blanditiis at doloremque.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
