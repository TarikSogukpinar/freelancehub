import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/dashboard/Navbar";
import Context from "../../context/context";
import { useRouter } from "next/router";

export default function Dashboard({ cookies }) {
  const token = cookies.split("=")[1];
  const router = useRouter();
  const tkn = useContext(Context);
  console.log(tkn);
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [tkn]);
  return (
    <>
      <Navbar />
    </>
  );
}

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;
  // console.log(cookies);
  return {
    props: { cookies },
  };
}
