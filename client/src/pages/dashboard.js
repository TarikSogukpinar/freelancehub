import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/dashboard/Navbar";

export default function Dashboard() {
  const router = useRouter();

  return (
    <>
      <Navbar />
    </>
  );
}
