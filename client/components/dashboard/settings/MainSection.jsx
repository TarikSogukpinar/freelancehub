import React from "react";
import GeneralSettings from "./sidebar/GeneralSettings";
import BankAccount from "./sidebar/BankAccount";
import Security from "./sidebar/Security";
import NotificationSettings from "./sidebar/NotificationSettings";

export default function MainSection({ mainSections }) {
  console.log(mainSections);
  return (
    <>
      {mainSections === "GeneralSettings" ? <GeneralSettings /> : ""}
      {mainSections === "BankAccount" ? <BankAccount /> : ""}
      {mainSections === "Security" ? <Security /> : ""}
      {mainSections === "NotificationSettings" ? <NotificationSettings /> : ""}
    </>
  );
}
