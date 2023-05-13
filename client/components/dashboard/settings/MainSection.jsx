import React from "react";
import GeneralSettings from "./sidebarsections/GeneralSettings";
import BankAccount from "./sidebarsections/BankAccount";
import Security from "./sidebarsections/Security";
import NotificationSettings from "./sidebarsections/NotificationSettings";

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
