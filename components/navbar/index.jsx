import { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";

import { formatAddress } from "@/utils";
import { useMetaMask } from "@/hooks/useMetaMask";

const NavbarComp = () => {
  const [active, setActive] = useState(false);
  const { wallet, hasProvider, connectMetaMask } = useMetaMask();

  const isActive = () => {
    window.scrollY > 90 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <Navbar
      fluid
      className={`${
        active
          ? "bg-white text-black shadow-[0px_10px_25px_rgba(37,42,52,0.08)] border-b border-[#3C4A79]"
          : "bg-white md:bg-transparent text-black md:text-white"
      } fixed w-full z-20 top-0 left-0`}
    >
      <div className="flex flex-wrap items-center justify-between w-full md:px-0 md:w-11/12 xl:w-4/5 max-w-7xl mx-auto">
        <Navbar.Brand className="text-xl xs:text-3xl font-playfair">
          <img src="/fundme.png" alt="" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          {!hasProvider && (
            <p className="bg-[#3C4A79] px-4 py-2 rounded-lg text-white mr-0 text-xs md:text-base md:mr-0 flex justify-center items-center">
              <a
                href="https://metamask.io/flask/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Please Install Metamask Flask
              </a>
            </p>
          )}
          {hasProvider && wallet.accounts.length < 1 && (
            <button
              className="bg-[#3C4A79] px-3 py-2 rounded-lg text-white mr-0 text-xs md:text-base md:mr-0"
              onClick={connectMetaMask}
            >
              Connect and Install Snap
            </button>
          )}
          {hasProvider && wallet.accounts.length > 0 && (
            <p className="bg-[#3C4A79] px-4 py-2 rounded-lg text-white mr-2 text-xs md:text-base md:mr-0 flex justify-center items-center">
              {formatAddress(wallet.accounts[0])}
            </p>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse
          className={`
           p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50  md:mt-0 md:border-0 md:bg-transparent`}
        >
          <li className="py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ">
            <Link href="/campaigns">Campaigns</Link>
          </li>
          <li className="py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ">
            <Link href="/profile">Profile</Link>
          </li>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComp;
