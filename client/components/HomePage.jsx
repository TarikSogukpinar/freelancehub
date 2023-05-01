/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Navbar from "./Navbar";
import { useState } from "react";
import {
  Speed,
  CollectionsBookmark,
  ConnectWithoutContact,
  Work,
} from "@mui/icons-material";
import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link";
import Stars from "./Stars";

export default function HomePage() {
  const [sections, setSections] = useState([
    {
      sectionNumber: 1,
      description:
        "Binlerce iş ilanına kolayca göz atın ve sadece birkaç tıklama ile başvurun. İş aramak hiç bu kadar kolay olmamıştı!",
      title: "İş İlanlarına Göz Atın",
      icon: <Speed sx={{ fontSize: 150 }} />,
      buttonName: "Hızlıca Başla",
    },
    {
      sectionNumber: 2,
      description:
        "Kendi profilinizi oluşturun ve potansiyel işverenlerin sizi keşfetmesini sağlayın. Ayrıca, çalışmalarınızı sergileyebileceğiniz bir portfolyo da oluşturabilirsiniz!",
      title: "Portfolyonuzu Oluşturun",
      icon: <CollectionsBookmark sx={{ fontSize: 150 }} />,
      buttonName: "Profilini Oluştur",
    },
    {
      sectionNumber: 3,
      description:
        "İşverenlerle doğrudan iletişim kurun, sorularınızı sorun ve iş görüşmeleri için randevu alın. En iyi iş fırsatları sadece birkaç tıklama uzağınızda!",
      title: "İletişim Kurun",
      icon: <ConnectWithoutContact sx={{ fontSize: 150 }} />,
      buttonName: "Fırsatları Yakala",
    },
    {
      sectionNumber: 4,
      description:
        "Kariyerinizi ilerletmek için gerekli olan bilgileri ve tavsiyeleri burada bulabilirsiniz. Kendinizi geliştirmek ve daha iyi iş fırsatlarına hazırlanmak için bu bölümü takip edin!",
      title: "Kariyerinizi Geliştirin",
      icon: <Work sx={{ fontSize: 150 }} />,
      buttonName: "Kariyer Fırsatları",
    },
  ]);
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Minimal Logo Tasarımı Yapabilirim.",
      img: "/images/placeholder-1.jpg",
      stars: {
        isItStarry: true,
        point: 5.0,
      },
      category: "Logo Tasarımı",
      username: "designerX",
      price: "199.90",
      currency: "TL",
      isFeatured: false,
    },
    {
      id: 2,
      title: "Frontend işlerinizi yapabilirim",
      img: "/images/placeholder-2.jpg",
      stars: {
        isItStarry: false,
        point: 0.0,
      },
      category: "Yazılım",
      username: "yazilimcikafasi",
      price: "980.00",
      currency: "TL",
      isFeatured: true,
    },
    {
      id: 3,
      title: "Sosyal medya düzenlemelerinizi yapabilirim.",
      img: "/images/placeholder-3.jpg",
      stars: {
        isItStarry: true,
        point: 3.9,
      },
      category: "Sosyal Medya",
      username: "socialNGX",
      price: "299.90",
      currency: "TL",
      isFeatured: true,
    },
  ]);

  return (
    <div>
      <Head>
        <title>
          Freelancer - İş verenler ile iş arayanların ortak platformu
        </title>
        <meta name="description" content="Freelancer HomePage" />
      </Head>
      <Navbar />
      <main>
       
        <section className="m-0 p-0">
          <div className="px-6 py-16 w-full flex flex-col justify-center items-center">
            <div className="section-top mb-16 flex flex-col justify-start items-center w-3/4">
              <h2 className="text-4xl font-bold my-4">Son İlanlar</h2>
              <p className="text-xl text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-xl text-center">
                Repudiandae, ex consequuntur voluptatibus atque, culpa
                consectetur error sint omnis similique sunt sed necessitatibus
                eos aut optio veniam dolorem. Facilis, rerum accusantium!
              </p>
            </div>
            <div className="cards flex flex-col md:flex-row justify-evenly">
              {cards.map((card) => {
                return (
                  <div
                    key={card.id}
                    className="flex flex-col w-full min-h-max max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-indigo-900 m-2"
                  >
                    <Link href="#" className="relative">
                      <Image
                        className=" rounded-t-lg"
                        src={card.img}
                        alt={card.title}
                        width={600}
                        height={400}
                        priority
                      />
                      <div
                        className={
                          card.stars.isItStarry
                            ? "flex items-center absolute bottom-1 left-1 bg-white p-2 rounded-lg"
                            : "hidden"
                        }
                      >
                        <Stars point={card.stars.point} />

                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                          {card.stars.point}
                        </span>
                      </div>
                      <div
                        className={
                          card.isFeatured
                            ? "flex absolute bottom-1 right-0 p-2 bg-lime-700 text-white border-t border-l border-b rounded-l-lg font-bold text-sm"
                            : "hidden"
                        }
                      >
                        Öne Çıkan
                      </div>
                    </Link>
                    <div className="p-5 h-full flex flex-col justify-between items-between">
                      <div>
                        <Link href={"/"}>
                          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {card.title}
                          </h5>
                        </Link>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white flex flex-col">
                          <Link href={"/"} className="text-sm text-lime-600">
                            {card.username}
                          </Link>
                          <span>
                            {card.price} {card.currency}
                          </span>
                        </span>
                        <Link
                          href="#"
                          className="text-white bg-lime-700 hover:bg-lime-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-700 dark:hover:bg-lime-900 dark:focus:ring-blue-800"
                        >
                          Hemen İncele
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section class="bg-white dark:bg-white">
          <div class="flex justify-center items-center lg:grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class=" place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-indigo-900">
                Şirketler İçin Serbest Çalışanlar
              </h1>
              <p class="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eaque, laudantium, harum commodi, fugit quaerat suscipit vero beatae velit nesciunt fuga repellendus culpa! Dolorum porro est distinctio dolor perspiciatis numquam?
              </p>
              <Link
                href="/login"
                class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-center text-indigo-900 font-extrabold rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Hemen Başlayın
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                href="/login"
                class="inline-flex items-center justify-center px-5 py-3 text-base text-center text-indigo-900 border border-indigo-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-indigo-900 font-bold hover:dark:text-white dark:border-indigo-900 dark:hover:bg-indigo-900 dark:focus:ring-gray-800"
              >
                Freelancerlar ile konuşun
              </Link>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src="/images/hero-1.png"
                alt="mockup"
                className="drop-shadow-md "
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
