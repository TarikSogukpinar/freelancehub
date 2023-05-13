import { AiFillEdit } from "react-icons/ai";

export default function NotificationSettings() {
  return (
    <div>
      <div>
        <div className="flex justify-between w-full mb-5">
          <h2 className="text-3xl text-gray-500 cursor-default font-bold">
            Mobil Uygulama Bildirim Ayarları
          </h2>
          <span className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900">
            <AiFillEdit className="text-xl" />
            <span className=" font-bold">Düzenle</span>
          </span>
        </div>
        <div className="bg-white p-10 mb-5 flex justify-between items-center w-full">
          <div className="w-1/2 self-start text-lg text-gray-500 font-bold">
            Mobil Uygulama Bildirim Ayarları
          </div>
          <div className="w-1/2 self-start text-lg text-gray-900 font-bold">
            Tüm Aktivitelerde Gönder
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-full mb-5">
          <h2 className="text-3xl text-gray-500 cursor-default font-bold">
            E-Posta Bildirim Ayarları
          </h2>
          <span className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900">
            <AiFillEdit className="text-xl" />
            <span className=" font-bold">Düzenle</span>
          </span>
        </div>
        <div className="bg-white p-10 mb-10 flex flex-col justify-between items-center w-full">
          <div className="flex justify-between py-5 border-b items-center w-full">
            <div className="w-1/2 self-start text-lg text-gray-500 font-bold">
              Hangi Durumlarda E-Posta Gönderilsin
            </div>
            <div className="w-1/2 self-start text-lg text-gray-900 font-bold">
              Sadece Önemli Aktivitelerde Gönder
            </div>
          </div>

          <div className="flex justify-between py-5 items-center w-full">
            <div className="w-1/2 self-start text-lg text-gray-500 font-bold">
              Kampanya ve Haftalık Bülten E-Postaları
            </div>
            <div className="w-1/2 self-start text-lg text-gray-900 font-bold">
              Hiçbir Zaman Gönderme
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-full mb-5">
          <h2 className="text-3xl text-gray-500 cursor-default font-bold">
            Web Sitesi Bildirim Ayarları
          </h2>
          <span className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900">
            <AiFillEdit className="text-xl" />
            <span className=" font-bold">Düzenle</span>
          </span>
        </div>
        <div className="bg-white p-10 mb-10 flex justify-between items-center w-full">
          <div className="w-1/2 self-start text-lg text-gray-500 font-bold">
            Mobil Uygulama Bildirim Ayarları
          </div>
          <div className="w-1/2 self-start text-lg text-gray-900 font-bold">
            Tüm Aktivitelerde Gönder
          </div>
        </div>
      </div>
    </div>
  );
}
