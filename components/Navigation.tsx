"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import navIcon from "@/public/menu-icon.svg";

const NavItem = ({
  text,
  href,
  forestFont = false,
}: {
  text: string;
  href: string;
  forestFont: boolean;
}) => {
  const bg = forestFont ? " bg-forest " : " bg-white ";
  return (
    <li className={`group relative md:text-center uppercase text-md`}>
      <Link href={href} className="block p-5">
        {text}
      </Link>
      <span
        className={`opacity-0 z-40 transition-opacity ease-in duration-300 group-hover:opacity-100 block w-full h-[2px] ${bg} b-0`}
        aria-hidden="true"
      ></span>
    </li>
  );
};

const Navigation = ({
  forestFont = false,
  fixed = false,
}: {
  forestFont?: boolean;
  fixed?: boolean;
}) => {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Events", href: "/events" },
    { text: "Contact", href: "/contact" },
  ];

  const closeCb = useCallback(() => setNavOpen(false), []);

  useEffect(() => {
    if (navOpen) {
      document.addEventListener("click", closeCb);
    } else {
      document.removeEventListener("click", closeCb);
    }
  }, [navOpen, closeCb]);

  const titleFont = forestFont ? " text-forest " : " text-white ";
  const itemsFont = forestFont ? " text-white md:text-forest " : "text-white";
  const fixedClass = fixed ? " fixed " : " absolute ";

  return (
    <nav className={`${fixedClass} t-0 l-0 z-30 w-full`}>
      <div className="flex py-4 mx-auto max-w-screen-lg h-full">
        <div className="self-center ml-5 flex-grow">
          <Link
            href="/"
            className={`${titleFont} italic text-center inline-block text-xl md:text-2xl`}
          >
            JustBeStill
          </Link>
        </div>

        <div className="md:hidden justify-self-end flex mr-5">
          <button
            className=" rounded-full bg-forest p-2 self-center"
            onClick={(e) => {
              setNavOpen(!navOpen);
            }}
          >
            <Image
              src={navIcon}
              width={25}
              height={25}
              alt={"Navigation Menu"}
            />
          </button>
        </div>

        <div className="flex col-start-2 justify-end">
          <ul
            className={`${!navOpen ? "hidden" : ""} bg-forest md:bg-transparent ${itemsFont} mt-[60px] md:mt-[0px] absolute md:mr-5 md:static max-md:animate-slideIn md:flex w-1/2 md:w-auto z-40 items-center justify-between md:space-x-4`}
          >
            {navItems.map(({ text, href }) => (
              <NavItem
                text={text}
                href={href}
                key={text}
                forestFont={forestFont}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
