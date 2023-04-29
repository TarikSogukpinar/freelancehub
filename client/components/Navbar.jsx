import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nv flex justify-between items-center p-2 fixed w-screen top-0 z-50">
      <div className="nv-left m-0 p-0 flex justify-start items-baseline leading-none font-extrabold cursor-pointer text-3xl">
        <span className=" text-red-600 border-b-4 border-black m-0 pb-0 pr-0 w-full">
          Freelancer
        </span>
      </div>
      <div className="nv-right text-white mr-4">
        <Link className="px-4 py-2 font-bold bg-red-600 mr-2 " href={"/login"}>
          Giriş
        </Link>
        <Link
          className="px-4 py-2 font-bold bg-red-600 mr-2"
          href={"/register"}
        >
          Kayıt Ol
        </Link>
      </div>
    </div>
  );
}
