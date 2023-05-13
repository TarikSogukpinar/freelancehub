import MyPanelHome from "./sidebarsections/MyPanelHome";
import MyOrders from "./sidebarsections/MyOrders";
import MySpecialBuyer from "./sidebarsections/MySpecialBuyer";
import MyLists from "./sidebarsections/MyLists";
import MyBalance from "./sidebarsections/MyBalance";
import MySales from "./sidebarsections/MySales";
import MyBoard from "./sidebarsections/MyBoard";
import MyPortfolio from "./sidebarsections/MyPortfolio";



export default function PanelMainSection({ mainSections, userData }) {
  return (
    <>
      {mainSections === "MyBalance" ? <MyBalance userData={userData} /> : ""}
      {mainSections === "MyBoard" ? <MyBoard userData={userData} /> : ""}
      {mainSections === "MyLists" ? <MyLists userData={userData} /> : ""}
      {mainSections === "MyOrders" ? <MyOrders userData={userData} /> : ""}
      {mainSections === "MyPanelHome" ? (
        <MyPanelHome userData={userData} />
      ) : (
        ""
      )}
      {mainSections === "MyPortfolio" ? (
        <MyPortfolio userData={userData} />
      ) : (
        ""
      )}
      {mainSections === "MySales" ? <MySales userData={userData} /> : ""}
      {mainSections === "MySpecialBuyer" ? (
        <MySpecialBuyer userData={userData} />
      ) : (
        ""
      )}
    </>
  );
}
