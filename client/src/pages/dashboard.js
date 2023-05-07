import { useEffect } from "react";
import Navbar from "../../components/dashboard/Navbar";
import { useRouter } from "next/router";

export default function Dashboard({ cookies }) {
  const token = cookies;
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token]);
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
