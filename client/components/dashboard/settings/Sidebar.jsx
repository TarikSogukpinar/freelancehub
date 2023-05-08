import { CiSettings, CiBank, CiLock, CiBellOn } from "react-icons/ci";

export default function Sidebar({ mainSections, setMainSections }) {
  return (
    <div className="h-screen flex justify-end pt-10">
      <div className="w-8/12">
        <div
          className={
            mainSections === "GeneralSettings"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-indigo-900 flex justify-start items-center"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="GeneralSettings"
          >
            <CiSettings className="text-3xl font-extrabold" />
            <button className="self-center pl-3">Genel Ayarlar</button>
          </div>
        </div>
        <div
          className={
            mainSections === "BankAccount"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-indigo-900 flex justify-start items-center"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="BankAccount"
          >
            <CiBank className="text-3xl font-extrabold" />
            <button className="self-center pl-3">Banka Bilgileri</button>
          </div>
        </div>
        <div
          className={
            mainSections === "Security"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-indigo-900 flex justify-start items-center"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="Security"
          >
            <CiLock className="text-3xl font-extrabold" />
            <button className="self-center pl-3">Güvenlik Ayarları</button>
          </div>
        </div>
        <div
          className={
            mainSections === "NotificationSettings"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-indigo-900 flex justify-start items-center"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="NotificationSettings"
          >
            <CiBellOn className="text-3xl font-extrabold" />
            <button className="self-center pl-3">Bildirim Ayarları</button>
          </div>
        </div>
      </div>
    </div>
  );
}
