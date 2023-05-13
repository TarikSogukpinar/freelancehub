import {
  AiOutlineHome,
  AiOutlineDatabase,
  AiOutlineStar,
  AiOutlineBank,
} from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { HiOutlineWallet, HiOutlineQueueList,HiOutlineFire } from "react-icons/hi2";

export default function PanelSidebar({ mainSections, setMainSections }) {
  return (
    <div className="h-screen flex justify-end pt-10">
      <div className="w-full xl:w-8/12">
        <div
          className={
            mainSections === "MyPanelHome"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 text-gray-500 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-lime-600 flex justify-start items-center font-medium"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="MyPanelHome"
          >
            <AiOutlineHome className="text-3xl font-extrabold min-w-[32px] " />
            <button className="self-center pl-3">Panel</button>
          </div>
        </div>
        <div
          className={
            mainSections === "MyOrders"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 text-gray-500 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-lime-600 flex justify-start items-center font-medium"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="MyOrders"
          >
            <AiOutlineDatabase className="text-3xl font-extrabold min-w-[32px] " />
            <button className="self-center pl-3">Siparişlerim</button>
          </div>
        </div>
        <div
          className={
            mainSections === "MySpecialBuyer"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 text-gray-500 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-lime-600 flex justify-start items-center font-medium"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="MySpecialBuyer"
          >
            <AiOutlineStar className="text-3xl font-extrabold min-w-[32px] " />
            <button className="self-center pl-3">Özel İstekler</button>
          </div>
        </div>
        <div
          className={
            mainSections === "MyLists"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 text-gray-500 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-lime-600 flex justify-start items-center font-medium"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="MyLists"
          >
            <HiOutlineQueueList className="text-3xl font-extrabold min-w-[32px] " />
            <button className="self-center pl-3">Listelerim</button>
          </div>
        </div>
        <div
          className={
            mainSections === "MyBalance"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 text-gray-500 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-lime-600 flex justify-start items-center font-medium"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="MyBalance"
          >
            <AiOutlineBank className="text-3xl font-extrabold min-w-[32px] " />
            <button className="self-center pl-3">Bakiyem</button>
          </div>
        </div>
        <div
          className={
            mainSections === "MySales"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 text-gray-500 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-lime-600 flex justify-start items-center font-medium"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="MySales"
          >
            <HiOutlineFire className="text-3xl font-extrabold min-w-[32px] " />
            <button className="self-center pl-3">Satışlarım</button>
          </div>
        </div>
        <div
          className={
            mainSections === "MyBoard"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 text-gray-500 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-lime-600 flex justify-start items-center font-medium"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="MyBoard"
          >
            <BsClipboardCheck className="text-3xl font-extrabold min-w-[32px] " />
            <button className="self-center pl-3">İlanlarım</button>
          </div>
        </div>
        <div
          className={
            mainSections === "MyPortfolio"
              ? "pr-10 border-r-2  hover:border-r-2 border-indigo-900 text-indigo-900 cursor-pointer"
              : "pr-10 border-r-2 border-white hover:border-r-2 text-gray-500 hover:border-lime-600 cursor-pointer"
          }
        >
          <div
            className="text-xl hover:text-lime-600 flex justify-start items-center font-medium"
            onClick={(e) => setMainSections(e.currentTarget.id)}
            id="MyPortfolio"
          >
            <HiOutlineWallet className="text-3xl font-extrabold min-w-[32px] " />
            <button className="self-center pl-3">Portföy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
