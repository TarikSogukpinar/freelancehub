import React from "react";
import GeneralSettings from "./sidebar/GeneralSettings";
import BankAccount from "./sidebar/BankAccount";
import Security from "./sidebar/Security";
import NotificationSettings from "./sidebar/NotificationSettings";

export default function MainSection({ mainSections, userData }) {
  return (
    <>
      {mainSections === "GeneralSettings" ? (
        <GeneralSettings userData={userData} />
      ) : (
        ""
      )}
      {mainSections === "BankAccount" ? (
        <BankAccount userData={userData} />
      ) : (
        ""
      )}
      {mainSections === "Security" ? <Security userData={userData} /> : ""}
      {mainSections === "NotificationSettings" ? (
        <NotificationSettings userData={userData} />
      ) : (
        ""
      )}
    </>
  );
}
