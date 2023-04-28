/* eslint-disable react/no-unescaped-entities */
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <section className="footer flex flex-col justify-start items-center bg-slate-800 min-h-64 text-white p-2">
      <div className="f-top container mx-auto self-start w-full">
        <div className="nv-left m-0 p-0 flex flex-col justify-start items-baseline leading-none font-extrabold cursor-pointer text-3xl">
          <span className=" text-red-600 border-b-2 border-white m-0 pb-0 pr-0 w-full flex justify-between items-end">
            Freelancer
            <span className="text-sm pl-5 text-white">
              Binlerce iş ilanına kolayca göz atın ve sadece birkaç tıklama ile
              başvurun. İş aramak hiç bu kadar kolay olmamıştı!
            </span>
          </span>
        </div>
      </div>
      <div className="f-center pb-10 container mx-auto grid grid-cols-4 mt-2 gap-2 self-start w-full">
        <div className="f-col f-col-1 flex flex-col ">
          <h3>Kategoriler</h3>
          <ul>
            <li> Grafik & Tasarım</li>
            <li>İnternet Reklamcılığı</li>
            <li>Yazı & Çeviri</li>
            <li>Yazılım & Teknoloji</li>
            <li>Video & Animasyon</li>
            <li>Ses & Müzik</li>
            <li>İş & Yönetim</li>
          </ul>
        </div>
        <div className="f-col f-col-2 flex flex-col ">
          <h3>İletişim</h3>
          <ul>
            <li>Yardım Merkezi</li>
            <li>Nasıl Çalışır?</li>
            <li>Sipariş İptal ve İade Koşulları</li>
            <li>Bize Yazın</li>
            <li>İletişim</li>
          </ul>
        </div>
        <div className="f-col f-col-3 flex flex-col ">
          <h3>Yararlı Linkler</h3>
          <ul>
            <li>Freelancer Ol, İstediğin Gibi Çalış!</li>
            <li>Geleceğin Çalışma Modeli | Bionluk Neden Var?</li>
            <li>A'dan Z'ye Freelancer Ne Demek?</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="f-col f-col-4 flex flex-col">
          <h3>Sosyal Medya</h3>
          <div className="icons flex">
            <Instagram className="hover:text-red-500 cursor-pointer" />
            <Twitter className="hover:text-red-500 cursor-pointer" />
            <LinkedIn className="hover:text-red-500 cursor-pointer" />
            <GitHub className="hover:text-red-500 cursor-pointer" />
            <Facebook className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="f-bottom flex justify-between items-center w-full container mx-auto">
        <div className="f-bottom-left flex justify-center items-center">
          <span className="mr-4 cursor-pointer text-gray-500 font-bold hover:text-gray-400">Freelancer Hakkında</span>
          <span className="mr-4 cursor-pointer text-gray-500 font-bold hover:text-gray-400">Üyelik Sözleşmesi</span>
          <span className="mr-4 cursor-pointer text-gray-500 font-bold hover:text-gray-400">Kullanım Şartları</span>
          <span className="mr-4 cursor-pointer text-gray-500 font-bold hover:text-gray-400">Gizlilik ve Kişisel Verilerin Korunması Politikası</span>
        </div>
        <div className="f-bottom-right flex justify-center items-center">
          Freelancer A.Ş. © 2022
        </div>
      </div>
    </section>
  );
}
