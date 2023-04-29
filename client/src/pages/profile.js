import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Profile() {
  const [local, setLocal] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("fr_token")) {
      router.push("/login");
    } else {
      setLocal(localStorage.getItem("fr_token"));
    }
  }, []);
  return (
    <div>{local ? <h1> User Profile</h1> : "Yönlendiriliyorsunuz..."}</div>
  );
}
