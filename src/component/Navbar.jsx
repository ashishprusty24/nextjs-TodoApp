import Link from "next/link";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  return (
    <>
      <ToastContainer />
      <header className="w-full md:w-[70%] mx-auto py-3 px-2">
        <nav className="w-full flex justify-between items-center">
          <Link href={"/"} className="font-bold text-2xl">
            Crud app
          </Link>
          <ul className="flex gap-x-4 font-semibold">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={`/contact/${Math.random() * 1000}`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
