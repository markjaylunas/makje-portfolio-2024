"use client";

import MainNav from "@/components/layout/MainNav";
import MobileNav from "@/components/layout/MobileNav";
import { Navbar } from "@nextui-org/navbar";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      maxWidth="2xl"
      classNames={navbarClassNames}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <MainNav isMenuOpen={isMenuOpen} />

      <MobileNav isMenuOpen={isMenuOpen} />
    </Navbar>
  );
}

const navbarClassNames = {
  item: [
    "flex",
    "relative",
    "h-full",
    "items-center",
    "data-[active=true]:after:content-['']",
    "data-[active=true]:after:absolute",
    "data-[active=true]:after:bottom-1/4",
    "data-[active=true]:after:left-0",
    "data-[active=true]:after:right-0",
    "data-[active=true]:after:h-[5px]",
    "data-[active=true]:after:rounded-[2px]",
    "data-[active=true]:after:bg-gradient-to-t from-primary-600",
  ],
};
