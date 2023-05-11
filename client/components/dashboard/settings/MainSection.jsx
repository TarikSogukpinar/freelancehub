import React from "react";
import GeneralSettings from "./sidebar/GeneralSettings";
import BankAccount from "./sidebar/BankAccount";
import Security from "./sidebar/Security";
import NotificationSettings from "./sidebar/NotificationSettings";

export default function MainSection({ mainSections, userData }) {
  // console.log("main", mainSections);
  //console.log("userData", userData);
  return (
    <>
      {mainSections === "GeneralSettings" ? <GeneralSettings userData={userData}/> : ""}
      {mainSections === "BankAccount" ? <BankAccount /> : ""}
      {mainSections === "Security" ? <Security /> : ""}
      {mainSections === "NotificationSettings" ? <NotificationSettings /> : ""}
    </>
  );
}
