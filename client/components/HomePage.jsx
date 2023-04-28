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
import Sections from "./Sections";
import Footer from "./Footer";

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
        {sections.map((item) => {
          return (
            <Sections
              key={item.sectionNumber}
              sectionNumber={item.sectionNumber}
              description={item.description}
              title={item.title}
              icon={item.icon}
              buttonName={item.buttonName}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
